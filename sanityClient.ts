// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "zmw0xth9", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token:"skdBjpw545spzp2lYpsH6DMrMG5v9LSzTyAOFbNSLQek463wdtmwxuIY2hz4y4Wxx4E6JVNghcfucv6rXjtHgXoO3GwvWYTRYZwoRzr7NgCkJYH7lKpVfK7s18c6HZgDcRYkLiejHmlSepLonJfnnBOGOCwjJrC3EJrsGPJy6yaAECX4GnhJ",
});