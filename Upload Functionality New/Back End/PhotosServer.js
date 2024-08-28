// // PhotosServer.js

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// const port = 3001;

// // Use CORS middleware to allow cross-origin requests
// app.use(cors());

// // Configure storage for Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'photos/'); // Directory where files will be stored
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); // Get file extension
//     cb(null, Date.now() + ext); // Rename file with a timestamp
//   }
// });

// // Set up Multer with the storage configuration and a file filter
// const upload = multer({ 
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const ext = path.extname(file.originalname).toLowerCase();
//     if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
//       return cb(new Error('Only JPG, JPEG, and GIF files are allowed'));
//     }
//     cb(null, true);
//   }
// });

// // Endpoint for handling file uploads
// app.post('/upload', upload.array('files', 2), (req, res) => {
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).send('No files uploaded');
//   }
//   const fileNames = req.files.map(file => file.filename);
//   console.log('Files received:');
//   req.files.forEach(file => {
//     console.log(`Filename: ${file.filename}`);
//     console.log(`Original Name: ${file.originalname}`);
//     console.log(`MIME Type: ${file.mimetype}`);
//     console.log(`Size: ${file.size} bytes`);
//   });

//   res.status(200).send(`Files uploaded: ${fileNames.join(', ')}`);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Photos server running at http://localhost:${port}`);
// });


const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'photos/'); 
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
      return cb(new Error('Only JPG, JPEG, and GIF files are allowed'));
    }
    cb(null, true);
  }
});

app.post('/upload', upload.array('files', 2), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded');
  }
  
  const fileNames = req.files.map(file => file.filename);
  console.log('Files received:');
  req.files.forEach(file => {
    console.log(`Filename: ${file.filename}`);
    console.log(`Original Name: ${file.originalname}`);
    console.log(`MIME Type: ${file.mimetype}`);
    console.log(`Size: ${file.size} bytes`);
  });

  res.status(200).send(`Files uploaded: ${fileNames.join(', ')}`);
});

app.listen(port, () => {
  console.log(`Photos server running at http://localhost:${port}`);
});
