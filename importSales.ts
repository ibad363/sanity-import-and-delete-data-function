import axios from 'axios';
import { client } from './sanityClient.js'; // Ensure the Sanity client is properly imported

// Function to import sales data into Sanity
async function importSalesData() {
  try {
    console.log('📊 Starting sales data import...');

    // Fetch data from the API or predefined sales data
    const response = await axios.get('https://6780c9c185151f714b07e3fb.mockapi.io/sales'); // Replace with your sales API URL
    const sales = response.data;

    console.log(`✅ Fetched ${sales.length} sales records.`);

    // Iterate over the sales records
    for (const sale of sales) {
      const sanitySale = {
        _id: `sale-${sale.sale_id}`, // Unique ID based on sale_id
        _type: 'sales',
        product: {
          _type: 'reference',
          _ref: `product-${sale.product_id}`, // Reference to the product ID
        },
        quantity_sold: sale.quantity_sold,
        sale_price: sale.sale_price,
        date_of_sale: sale.date_of_sale,
        customer_id: sale.customer_id,
      };

      console.log('Uploading sale record:', sanitySale);

      // Import the document into Sanity
      await client.createOrReplace(sanitySale);
      console.log(`✅ Successfully imported sale record: ${sanitySale._id}`);
    }

    console.log('🎉 Sales data import completed successfully!');
  } catch (error) {
    console.error('❌ Error importing sales data:', error);
  }
}

importSalesData();
