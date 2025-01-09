"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanityClient_js_1 = require("./sanityClient.js"); // Import your existing Sanity client
/**
 * Function to delete all products from Sanity
 */
async function deleteAllProducts() {
    try {
        // GROQ query to find all documents of type "product"
        const query = '*[_type == "product"]';
        // Fetch all products
        const products = await sanityClient_js_1.client.fetch(query);
        if (products.length === 0) {
            console.log('No products found to delete.');
            return;
        }
        // Map over the product IDs and create delete promises
        const deletePromises = products.map((product) => sanityClient_js_1.client.delete(product._id));
        // Await all delete operations
        await Promise.all(deletePromises);
        console.log(`✅ Deleted ${products.length} products successfully!`);
    }
    catch (error) {
        console.error('❌ Error deleting products:', error);
    }
}
deleteAllProducts();
