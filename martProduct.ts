import axios from 'axios';
import { client } from './sanityClient.js';
import { dummyProducts } from './dummyProducts.js';

async function uploadImageToSanity(imageUrl: string): Promise<string> {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data);
  const assetType = /\.(mp4|webm)$/i.test(imageUrl) ? 'file' : 'image';

  const asset = await client.assets.upload(
    assetType,
    buffer,
    { filename: imageUrl.split('/').pop() }
  );
  return asset._id;
}

function isVideo(url: string): boolean {
  return /\.(mp4|webm)$/i.test(url);
}

async function importData() {
  // ⚙️ Step 0: Fetch all collections and build slug → real _id map
   // 0) Fetch collections
   const collections = await client.fetch(
    `*[_type == "collection"]{ _id, "slug": slug.current }`
  );
  const collectionMap: Record<string,string> = {};
  for (const col of collections) {
    collectionMap[col.slug] = col._id;
  }

  // 🔍 DEBUG: print out the map you built
  console.log("Fetched collectionMap:", collectionMap);

  try {
    for (const product of dummyProducts) {
      const docId = product.slug.current;
      const refSlug = product.collection._ref;

      // 🔍 DEBUG: show what we're about to look up
      console.log(`Looking up collection for product "${docId}" → slug: "${refSlug}"`);

      const realCollectionId = collectionMap[refSlug];
      if (!realCollectionId) {
        console.warn(`⚠️ No collection found for slug "${refSlug}", skipping "${docId}"`);
        continue;
      }

      // 1) Upload baseMedia if no variants
      const baseMediaRefs: any[] = [];
      if (!product.hasVariants && Array.isArray(product.baseMedia)) {
        for (const url of product.baseMedia) {
          try {
            const assetId = await uploadImageToSanity(url);
            baseMediaRefs.push({
              _type: isVideo(url) ? 'file' : 'image',
              asset: { _type: 'reference', _ref: assetId }
            });
          } catch (uploadErr) {
            console.warn(`⚠️ Skipping baseMedia URL "${url}" for "${docId}":`, uploadErr);
          }
        }
      }

      // 2) Upload variant media if hasVariants
      const variantsDocs: any[] = [];
      if (product.hasVariants && Array.isArray(product.variants)) {
        for (const variant of product.variants) {
          const mediaRefs: any[] = [];
          for (const url of variant.media) {
            try {
              const assetId = await uploadImageToSanity(url);
              mediaRefs.push({
                _type: isVideo(url) ? 'file' : 'image',
                asset: { _type: 'reference', _ref: assetId }
              });
            } catch (uploadErr) {
              console.warn(`⚠️ Skipping variant media URL "${url}" for "${docId}":`, uploadErr);
            }
          }
          variantsDocs.push({
            _type: 'variant',
            attributes: variant.attributes,
            stock: variant.stock,
            price: variant.price,
            discountedPrice: variant.discountedPrice,
            media: mediaRefs
          });
        }
      }

      // 3) Build the final Sanity document
      const sanityProduct: any = {
        _id: docId,
        _type: 'product',
        title: product.title,
        slug: { _type: 'slug', current: product.slug.current },
        description: product.description,
        hasVariants: product.hasVariants,
        // ▶️ Use the real ID here
        collection: { _type: 'reference', _ref: realCollectionId },
        tags: product.tags || [],
        brand: product.brand,
        isNewArrival: product.isNewArrival,
        isFeatured: product.isFeatured,
        isBestSelling: product.isBestSelling,
        averageRating: product.averageRating,
        totalReviewsCount: product.totalReviewsCount
      };

      // Attach base or variant fields
      if (!product.hasVariants) {
        sanityProduct.baseMedia = baseMediaRefs;
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