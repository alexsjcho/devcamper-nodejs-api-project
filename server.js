const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

//Retrieve all bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
});

//Retrive a bootcamp
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp ${req.params.id} ` });
});

//Create a new bootcamp
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, message: 'Create new bootcamp' });
});

//Update a bootcamp
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id} ` });
});

//Delete a bootcamp
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id} ` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
