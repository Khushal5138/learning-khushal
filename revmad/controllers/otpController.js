const OTP = require('../models/otp');
const FilesUpload = require('../models/filesUpload');
const { Twilio } = require('twilio');
const crypto = require('crypto');
require('dotenv').config();
const twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send OTP
exports.sendOTP = async (req, res) => {
  const { phone , filesUpload } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

  const ratingLink = `http://your-website.com/rate-service`; // Generate rating link here

  try {
    await twilio.messages.create({
      body: `Your OTP is ${otp}. Click the link to rate the service: ${ratingLink}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone
    });

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
};

// exports.verifyOTP = async (req, res) => {
//   const { phone, otp } = req.body;

//   try {
//     const otpRecord = await OTP.findOne({ phone, otp });

//     if (!otpRecord) return res.status(400).json({ message: 'Invalid OTP' });
//     if (new Date() > otpRecord.expiresAt) return res.status(400).json({ message: 'OTP expired' });

//     res.status(200).json({ message: 'OTP verified successfully', ratingLink: otpRecord.ratingLink });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
//   }
// };





exports.verifyOTP = async (req, res) => {
  const { phone, otp, filesUpload } = req.body;

  try {
    // Find the OTP record and populate the filesUpload field
    const otpRecord = await OTP.findOne({ phone , otp }).populate('filesUpload');

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
    if (new Date() > otpRecord.expiresAt) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    // Debugging: Log the otpRecord and filesUploadId
    console.log('OTP Record:', otpRecord);
    console.log('Provided FilesUploadId:', filesUpload);

    // Check if the provided filesUploadId matches the OTP record's filesUpload ID
    if (!otpRecord.filesUpload || !otpRecord.filesUpload._id.equals(filesUpload)) {
      return res.status(400).json({ message: 'Invalid files upload ID' });
    }

    res.status(200).json({ message: 'OTP verified successfully', ratingLink: otpRecord.ratingLink });
  } catch (error) {
    res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
  }
};

