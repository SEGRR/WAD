const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const app = express();

const upload = multer();
app.use(upload.none());
const port = 3000; // You can use any port you prefer

// Body parser middleware to parse incoming requests with JSON payloads
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/signup', (req, res) => {
  // Retrieve form data from the request body
  const formData = req.body;

  // Handle the received data (you can save it to a database, send emails, etc.)
  console.log(formData)
  // Send a response back to the client
  res.send('Registration is complete!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
