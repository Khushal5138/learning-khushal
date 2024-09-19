const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
  files: [
    {
      type: String,  // Filename or path to the uploaded file
      required: true
    }
  ]
});

const FileUpload = mongoose.model('FileUpload', fileUploadSchema);

module.exports = FileUpload;
