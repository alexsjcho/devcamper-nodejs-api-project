//@description    Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};

//@description    Get a bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp ${req.params.id} ` });
};

//@description    Create new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create new bootcamp' });
};

//@description    Update bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id} ` });
};

//@description    Delete bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id} ` });
};
