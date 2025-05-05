// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-02-02',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token:"",
});