// index.js
const express = require('express');

// Initialize the express application
const app = express();

// Set the port (default to 3000)
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route to return a custom message
app.get('/message', (req, res) => {
  res.send('This is a custom message!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
