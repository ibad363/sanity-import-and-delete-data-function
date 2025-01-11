"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: "zmw0xth9", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "sktuXDLrb6viGhgUG40gzPve6RSgGIGE0F52jfwl2FKAGmd4E3XZb9dShFSdzxR4tWPnBF9tQdQ4TDzTNUzAuepx5LGNwX15oXxWxfJcHKd4e0S7lbcdbU7O0l07bkGqBxLeuDf93IeQhFrlsJvA6B7onqoZIq1vRWgyO9qNcFN72QyXZqeY",
});
