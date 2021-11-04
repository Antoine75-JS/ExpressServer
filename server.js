// Setup dotenv
require('dotenv').config();

// Dependencies
const express = require('express');
const cors = require('cors');

// Creates express app
const app = express();

// App init
app.use(express.json());
app.use(cors());

// Handle 404
app.use((_, res, next) => {
  res.status(404);
  next();
});

// Listens to env PORT or 3404 if not found
app.listen(process.env.PORT || 3404, () => {
  console.log(`Server running on ${process.env.PORT ? process.env.PORT : 3404}`);
});