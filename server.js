const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to enable CORS
app.use(cors());

// Import routes
const routes = require('./routes');

// Use the routes
app.use('/', routes); // Use the routes at the root level

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
