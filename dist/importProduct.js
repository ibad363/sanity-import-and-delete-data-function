"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sanityClient_js_1 = require("./sanityClient.js");
async function uploadImageToSanity(imageUrl) {
    try {
        const response = await axios_1.default.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        const asset = await sanityClient_js_1.client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop(),
        });
        console.log('Image uploaded successfully:', asset);
        return asset._id;
    }
    catch (error) {
        console.error('❌ Failed to upload image:', imageUrl, error);
        throw error;
    }
}
async function importData() {
    try {
        // Fetch data from your API
        const response = await axios_1.default.get('https://677cca8c4496848554c7aa31.mockapi.io/products');
        const products = response.data;
        // Iterate over the products
        for (const product of products) {
            let imageRef = '';
            // Upload image and get asset reference if it exists
            if (product.image) {
                imageRef = await uploadImageToSanity(product.image);
            }
            const sanityProduct = {
                _id: `product-${product.id}`, // Prefix the ID to ensure validity
                _type: 'product',
                name: product.name, // Changed to match your API data
                price: product.price,
                tags: product.tags || [],
                sizes: product.sizes || [],
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageRef, // Set the correct asset reference ID
                    },
                },
                description: product.description,
                rating: product.rating || 0,
            };
            console.log('Uploading product:', sanityProduct);
            // Import data into Sanity
            await sanityClient_js_1.client.createOrReplace(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.name}`);
        }
        console.log('✅ Data import completed!');
    }
    catch (error) {
        console.error('❌ Error importing data:', error);
    }
}
importData();
