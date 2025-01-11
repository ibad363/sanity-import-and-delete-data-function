import axios from 'axios';
import { client } from './sanityClient.js'; // Ensure the Sanity client is properly imported

// Function to import shipment data into Sanity
async function importShipmentData() {
  try {
    console.log('📦 Starting shipment data import...');

    // Fetch data from the shipment API
    const response = await axios.get('https://6780c9c185151f714b07e3fb.mockapi.io/shipment');
    const shipments = response.data;

    console.log(`✅ Fetched ${shipments.length} shipment records.`);

    // Iterate over the shipment records
    for (const shipment of shipments) {
      const sanityShipment = {
        _id: `shipment-${shipment.tracking_id}`, // Unique ID based on tracking_id
        _type: 'shipment',
        tracking_id: shipment.tracking_id,
        order_id: shipment.order_id,
        shipment_status: shipment.shipment_status,
        estimated_delivery_date: shipment.estimated_delivery_date,
        carrier: shipment.carrier,
        shipment_origin: shipment.shipment_origin,
        shipment_destination: shipment.shipment_destination,
        customer_phone: shipment.customer_phone,
      };

      console.log('Uploading shipment record:', sanityShipment);

      // Import the document into Sanity
      await client.createOrReplace(sanityShipment);
      console.log(`✅ Successfully imported shipment record: ${sanityShipment._id}`);
    }

    console.log('🎉 Shipment data import completed successfully!');
  } catch (error) {
    console.error('❌ Error importing shipment data:', error);
  }
}

importShipmentData();
