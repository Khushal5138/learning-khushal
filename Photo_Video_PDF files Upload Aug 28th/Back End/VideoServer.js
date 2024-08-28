const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3002; 

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'videos/'); 
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
    if (ext !== '.mp4' && ext !== '.wmv') {
      return cb(new Error('Only MP4 and WMV files are allowed'));
    }
    cb(null, true);
  }
});

app.post('/upload', upload.array('videos', 2), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded');
  }
  
  const fileNames = req.files.map(file => file.filename);
  console.log('Videos received:');
  req.files.forEach(file => {
    console.log(`Filename: ${file.filename}`);
    console.log(`Original Name: ${file.originalname}`);
    console.log(`MIME Type: ${file.mimetype}`);
    console.log(`Size: ${file.size} bytes`);
  });

  res.status(200).send(`Videos uploaded: ${fileNames.join(', ')}`);
});

app.listen(port, () => {
  console.log(`Video server running at http://localhost:${port}`);
});
