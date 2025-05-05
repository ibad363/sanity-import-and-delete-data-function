"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: "", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-02-02', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "",
});