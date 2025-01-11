"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sanityClient_js_1 = require("./sanityClient.js"); // Ensure the Sanity client is properly imported
// Function to import inventory data into Sanity
async function importInventoryData() {
    try {
        console.log('📦 Starting inventory data import...');
        // Fetch data from the API
        const response = await axios_1.default.get('https://677cca8c4496848554c7aa31.mockapi.io/inventory');
        const inventories = response.data;
        console.log(`✅ Fetched ${inventories.length} inventory items.`);
        // Iterate over the inventory items
        for (const inventory of inventories) {
            const sanityInventory = {
                _id: `inventory-${inventory.sku}`, // Using SKU to ensure unique IDs
                _type: 'inventory',
                product: {
                    _type: 'reference',
                    _ref: `product-${inventory.product_id}`, // Reference to the product ID
                },
                sku: inventory.sku,
                stock_levels: (inventory.stock_levels || []).map((level) => ({
                    _type: 'object',
                    size: level.size,
                    color: level.color,
                    quantity: level.quantity,
                })),
                price_adjustment: inventory.price_adjustment
                    ? {
                        _type: 'object',
                        discount: inventory.price_adjustment.discount || 0,
                        faulty_item: inventory.price_adjustment.faulty_item || false,
                        replacement_policy: inventory.price_adjustment.replacement_policy || 'None',
                    }
                    : null,
                supplier_contact: inventory.supplier_contact || 'Not Provided',
            };
            console.log('Uploading inventory item:', sanityInventory);
            // Import the document into Sanity
            await sanityClient_js_1.client.createOrReplace(sanityInventory);
            console.log(`✅ Successfully imported inventory item: ${sanityInventory.sku}`);
        }
        console.log('🎉 Inventory data import completed successfully!');
    }
    catch (error) {
        console.error('❌ Error importing inventory data:', error);
    }
}
importInventoryData();
