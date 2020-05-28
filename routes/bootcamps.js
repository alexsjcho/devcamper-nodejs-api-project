const express = require('express');
const router = express.Router();

//Retrieve all bootcamps
router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
});

//Retrive a bootcamp
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp ${req.params.id} ` });
});

//Create a new bootcamp
router.post('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Create new bootcamp' });
});

//Update a bootcamp
router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id} ` });
});

//Delete a bootcamp
router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id} ` });
});

module.exports = router;
