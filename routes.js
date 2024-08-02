// routes.js
const express = require('express');
// Create router instance
const router = express.Router();
// Import the Api
const Api = require('./api');

// Fetch all records using POST
router.post("/bfhl", Api.data_all);
router.get("/bfhl", Api.operation_code);

module.exports = router;
