// const OTP = require('../models/otp');
// const FilesUpload = require('../models/filesUpload');
// const { Twilio } = require('twilio');
// const crypto = require('crypto');
// require('dotenv').config();
// const twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // Send OTP
// exports.sendOTP = async (req, res) => {
//   const { phone , filesUpload } = req.body;
//   const otp = crypto.randomInt(100000, 999999).toString();
//   const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

//   const ratingLink = `http://your-website.com/rate-service`; // Generate rating link here

//   try {
//     await twilio.messages.create({
//       body: `Your OTP is ${otp}. Click the link to rate the service: ${ratingLink}`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phone
//     });

//     const otpRecord = new OTP({
//       phone,
//       otp,
//       expiresAt,
//       ratingLink,
//       filesUpload
//     });

//     await otpRecord.save();

//     res.status(200).json({ message: 'OTP sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to send OTP', error: error.message });
//   }
// };

// // exports.verifyOTP = async (req, res) => {
// //   const { phone, otp } = req.body;

// //   try {
// //     const otpRecord = await OTP.findOne({ phone, otp });

// //     if (!otpRecord) return res.status(400).json({ message: 'Invalid OTP' });
// //     if (new Date() > otpRecord.expiresAt) return res.status(400).json({ message: 'OTP expired' });

// //     res.status(200).json({ message: 'OTP verified successfully', ratingLink: otpRecord.ratingLink });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
// //   }
// // };





// exports.verifyOTP = async (req, res) => {
//   const { phone, otp, filesUpload } = req.body;

//   try {
//     // Find the OTP record and populate the filesUpload field
//     const otpRecord = await OTP.findOne({ phone , otp }).populate('filesUpload');

//     if (!otpRecord) {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }
//     if (new Date() > otpRecord.expiresAt) {
//       return res.status(400).json({ message: 'OTP expired' });
//     }

//     // Debugging: Log the otpRecord and filesUploadId
//     console.log('OTP Record:', otpRecord);
//     console.log('Provided FilesUploadId:', filesUpload);

//     // Check if the provided filesUploadId matches the OTP record's filesUpload ID
//     if (!otpRecord.filesUpload || !otpRecord.filesUpload._id.equals(filesUpload)) {
//       return res.status(400).json({ message: 'Invalid files upload ID' });
//     }

//     res.status(200).json({ message: 'OTP verified successfully', ratingLink: otpRecord.ratingLink });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
//   }
// };








// const { check, validationResult } = require('express-validator');
// const OTP = require('../models/otp');
// const FilesUpload = require('../models/filesUpload');
// const { Twilio } = require('twilio');
// const crypto = require('crypto');
// require('dotenv').config();
// const twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // Validation and sanitization for sending OTP
// exports.validateSendOTP = [
//   check('phone')
//     .isMobilePhone().withMessage('Invalid phone number')
//     .trim().escape(),
//   check('filesUpload')
//     .notEmpty().withMessage('Files upload ID is required')
//     .trim().escape(),
// ];

// // Send OTP
// exports.sendOTP = [
//   // Apply validation
//   exports.validateSendOTP,

//   async (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { phone, link , filesUpload } = req.body;
//     const otp = crypto.randomInt(100000, 999999).toString();
//     const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

//     const ratingLink = link ; // Generate rating link here

//     try {
//       await twilio.messages.create({
//         body: `Your OTP is ${otp}. Click the link to rate the service: ${ratingLink}`,
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: phone
//       });

//       const otpRecord = new OTP({
//         phone,
//         otp,
//         expiresAt,
//         ratingLink,
//         filesUpload
//       });

//       await otpRecord.save();

//       res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to send OTP', error: error.message });
//     }
//   }
// ];

// // Validation and sanitization for verifying OTP
// exports.validateVerifyOTP = [
//   check('phone')
//     .isMobilePhone().withMessage('Invalid phone number')
//     .trim().escape(),
//   check('otp')
//     .isNumeric().withMessage('OTP must be a number')
//     .isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
//     .trim().escape(),
//   check('filesUpload')
//     .notEmpty().withMessage('Files upload ID is required')
//     .trim().escape(),
// ];

// // Verify OTP
// exports.verifyOTP = [
//   // Apply validation
//   exports.validateVerifyOTP,

//   async (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { phone, otp, filesUpload } = req.body;

//     try {
//       // Find the OTP record and populate the filesUpload field
//       const otpRecord = await OTP.findOne({ phone, otp }).populate('filesUpload');

//       if (!otpRecord) {
//         return res.status(400).json({ message: 'Invalid OTP' });
//       }
//       if (new Date() > otpRecord.expiresAt) {
//         return res.status(400).json({ message: 'OTP expired' });
//       }

//       // Check if the provided filesUploadId matches the OTP record's filesUpload ID
//       if (!otpRecord.filesUpload || !otpRecord.filesUpload._id.equals(filesUpload)) {
//         return res.status(400).json({ message: 'Invalid files upload ID' });
//       }

//       res.status(200).json({ message: 'OTP verified successfully', ratingLink: otpRecord.ratingLink });
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
//     }
//   }
// ];








const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const OTP = require('../models/otp');
const FilesUpload = require('../models/filesUpload');
const { Twilio } = require('twilio');
const crypto = require('crypto');
require('dotenv').config();
const twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Validation and sanitization for sending OTP
exports.validateSendOTP = [
  check('phone')
    .isMobilePhone().withMessage('Invalid phone number')
    .trim().escape(),
  check('filesUpload')
    .notEmpty().withMessage('Files upload ID is required')
    .trim().escape(),
];

// Send OTP
exports.sendOTP = [
  // Apply validation rules
  ...exports.validateSendOTP,

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { phone, link, filesUpload } = req.body;

    const otp = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    const ratingLink = link; // Generate rating link here

    try {
      // Send OTP via Twilio
      await twilio.messages.create({
        body: `Your OTP is ${otp}. Click the link to rate the service: ${ratingLink}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone
      });

      // Save OTP record
      const otpRecord = new OTP({
        phone,
        otp,
        expiresAt,
        ratingLink,
        filesUpload
      });

      await otpRecord.save();

      res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send OTP', error: error.message });
    }
  }
];

// Validation and sanitization for verifying OTP
exports.validateVerifyOTP = [
  check('phone')
    .isMobilePhone().withMessage('Invalid phone number')
    .trim().escape(),
  check('otp')
    .isNumeric().withMessage('OTP must be a number')
    .isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
    .trim().escape(),
    check('filesUpload')
    .custom(value => mongoose.Types.ObjectId.isValid(value) ? true : Promise.reject('Invalid Files Upload ID'))
    .notEmpty().withMessage('Files upload ID is required')
    .trim()
    .escape(),

];

// Verify OTP
exports.verifyOTP = [
  // Apply validation rules
  ...exports.validateVerifyOTP,

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { phone, otp, filesUpload } = req.body;

    try {
      // Find the OTP record and populate the filesUpload field
      const otpRecord = await OTP.findOne({ phone, otp }).populate('filesUpload');

      if (!otpRecord) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
      if (new Date() > otpRecord.expiresAt) {
        return res.status(400).json({ message: 'OTP expired' });
      }

      // Check if the provided filesUploadId matches the OTP record's filesUpload ID
      if (!otpRecord.filesUpload || !otpRecord.filesUpload._id.equals(filesUpload)) {
        return res.status(400).json({ message: 'Invalid files upload ID' });
      }

      res.status(200).json({ message: 'OTP verified successfully', ratingLink: otpRecord.ratingLink });
    } catch (error) {
      res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
    }
  }
];
