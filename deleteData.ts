import { client } from './sanityClient.js'; // Import your existing Sanity client

/**
 * Function to delete all products from Sanity
 */
async function deleteAllProducts() {
  try {
    // GROQ query to find all documents of type "product"
    // const query = '*[_type == "product" && _createdAt >= "2025-05-05T15:27:55.675Z"]'; // delete product created before 4 hours by ISO String
    const query = '*[_type == "product"]'; // delete product created before 4 hours by ISO String

    // Fetch all products
    const products = await client.fetch(query);

    if (products.length === 0) {
      console.log('No inventory found to delete.');
      return;
    }

    // Map over the product IDs and create delete promises
    const deletePromises = products.map((product:any) => client.delete(product._id));

    // Await all delete operations
    await Promise.all(deletePromises);

    console.log(`✅ Deleted ${products.length} inventory successfully!`);
  } catch (error) {
    console.error('❌ Error deleting inventory:', error);
  }
}

deleteAllProducts()