// const FileUpload = require('../models/filesUpload');
// const multer = require('multer');
// const path = require('path');

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the directory to store files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Use a timestamp for unique filenames
//   }
// });

// const upload = multer({ storage: storage }).array('files', 2); // Limit to 2 files

// // Upload files and save their paths
// exports.uploadFiles = (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.status(500).json({ message: 'File upload failed', error: err });
//     }

//     if (req.files.length !== 2) {
//       return res.status(400).json({ message: 'Exactly 2 files are required' });
//     }

//     try {
//       const filePaths = req.files.map(file => file.path);

//       const newFileUpload = new FileUpload({
//         files: filePaths
//       });

//       const savedFiles = await newFileUpload.save();
//       res.status(201).json(savedFiles);
//     } catch (error) {
//       res.status(500).json({ message: 'Error saving file information', error: error.message });
//     }
//   });
// };

// // Get all uploaded files (optional)
// exports.getAllUploads = async (req, res) => {
//   try {
//     const uploads = await FileUpload.find();
//     res.json(uploads);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





const FileUpload = require('../models/filesUpload');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to store files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a timestamp for unique filenames
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Validate file type (optional, e.g., only allow images)
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
}).array('files', 2); // Limit to 2 files

// Upload files and save their paths
exports.uploadFiles = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      // Handle file upload errors
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ message: 'You can only upload up to 2 files' });
      } else if (err.message === 'Invalid file type') {
        return res.status(400).json({ message: 'Only images are allowed' });
      }
      return res.status(500).json({ message: 'File upload failed', error: err.message });
    }

    // Validate number of files uploaded
    if (req.files.length !== 2) {
      return res.status(400).json({ message: 'Exactly 2 files are required' });
    }

    try {
      // Save file paths to the database
      const filePaths = req.files.map(file => file.path);

      const newFileUpload = new FileUpload({
        files: filePaths
      });

      const savedFiles = await newFileUpload.save();
      res.status(201).json(savedFiles);
    } catch (error) {
      res.status(500).json({ message: 'Error saving file information', error: error.message });
    }
  });
};

// Get all uploaded files (optional)
exports.getAllUploads = async (req, res) => {
  try {
    const uploads = await FileUpload.find();
    res.json(uploads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
