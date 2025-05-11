import axios from 'axios';
import { client } from './sanityClient.js';
import { dummyProducts } from './dummyProduct2.js';
import { nanoid } from 'nanoid';

async function uploadImageToSanity(imageUrl: string): Promise<string> {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload(
        'image',  // Only image type, no video processing
        buffer,
        { filename: imageUrl.split('/').pop() }
    );
    return asset._id;
}

async function importData() {
    // Fetch collections
    const collections = await client.fetch(
        `*[_type == "collection"]{ _id, "slug": slug.current }`
    );
    const collectionMap: Record<string, string> = {};
    for (const col of collections) {
        collectionMap[col.slug] = col._id;
    }

    try {
        for (const product of dummyProducts) {
            const docId = product.slug.current;
            const refSlug = product.collection._ref;

            // Look up the real collection ID
            const realCollectionId = collectionMap[refSlug];
            if (!realCollectionId) {
                console.warn(`⚠️ No collection found for slug "${refSlug}", skipping "${docId}"`);
                continue;
            }

            // Build description with keys
            const descriptionWithKeys = Array.isArray(product.description)
                ? product.description.map(block => ({
                    ...block,
                    _key: nanoid(),
                }))
                : [];

            // Upload base media (at least one image)
            const baseMediaRefs: any[] = [];
            if (Array.isArray(product.baseImages)) {
                for (const url of product.baseImages) {
                    try {
                        const assetId = await uploadImageToSanity(url);
                        baseMediaRefs.push({
                            _key: nanoid(),
                            _type: 'image',
                            asset: { _type: 'reference', _ref: assetId }
                        });
                    } catch (uploadErr) {
                        console.warn(`⚠️ Skipping baseMedia URL "${url}" for "${docId}":`, uploadErr);
                    }
                }
            }

            // Process variants
            const variantsDocs: any[] = [];
            if (product.hasVariants && Array.isArray(product.variants)) {
                for (const variant of product.variants) {
                    let variantImage = null;
                    if (variant.image) {
                        try {
                            const assetId = await uploadImageToSanity(variant.image);
                            variantImage = {
                                _type: 'image',
                                asset: { _type: 'reference', _ref: assetId }
                            };
                        } catch (uploadErr) {
                            console.warn(`⚠️ Skipping variant image URL "${variant.image}" for "${docId}":`, uploadErr);
                        }
                    }
                    variantsDocs.push({
                        _key: nanoid(),
                        _type: 'variant',
                        attributes: variant.attributes,
                        stock: variant.stock,
                        price: variant.price,
                        discountedPrice: variant.discountedPrice,
                        image: variantImage
                    });
                }
            }

            // Build the final Sanity document
            const sanityProduct: any = {
                _id: docId,
                _type: 'product',
                title: product.title,
                slug: { _type: 'slug', current: product.slug.current },
                description: descriptionWithKeys,
                hasVariants: product.hasVariants,
                collection: { _type: 'reference', _ref: realCollectionId },
                tags: product.tags || [],
                brand: product.brand,
                isNewArrival: product.isNewArrival,
                isFeatured: product.isFeatured,
                isBestSelling: product.isBestSelling,
                averageRating: product.averageRating,
                totalReviewsCount: product.totalReviewsCount
            };

            // Always attach baseMedia
            sanityProduct.baseImages = baseMediaRefs;

            if (!product.hasVariants) {
                sanityProduct.baseOriginalPrice = product.baseOriginalPrice;
                sanityProduct.baseDiscountedPrice = product.baseDiscountedPrice;
                sanityProduct.baseStock = product.baseStock;
            } else {
                sanityProduct.variants = variantsDocs;
            }

            console.log('→ Importing:', sanityProduct.slug.current);
            await client.createOrReplace(sanityProduct);
            console.log(`✅ Imported ${sanityProduct.slug.current}`);
        }

        console.log('🎉 All products imported successfully.');
    } catch (err) {
        console.error('❌ Import error:', err);
    }
}

importData();