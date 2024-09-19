// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Input,
//   CircularProgress,
//   Card,
//   CardContent,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const GradientBackground = styled(Box)({
//   background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
//   height: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "20px",
// });

// const AnimatedCard = styled(Card)({
//   animation: "$fadeIn 1s ease-out",
//   "@keyframes fadeIn": {
//     "0%": { opacity: 0, transform: "translateY(20px)" },
//     "100%": { opacity: 1, transform: "translateY(0)" },
//   },
//   width: "100%",
//   maxWidth: "600px",
//   padding: "20px",
//   boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
// });

// const OtpAndUpload = () => {
//   const [phone, setPhone] = useState("");
//   const [files, setFiles] = useState([]);
//   const [fileUploadId, setFileUploadId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [otp, setOtp] = useState(""); // State for OTP input
//   const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     setFiles([...event.target.files]);
//   };

//   const handleFileUpload = async () => {
//     if (files.length !== 2) {
//       setError("You must upload exactly 2 images.");
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     for (const file of files) {
//       formData.append("files", file);
//     }

//     try {
//       const uploadResponse = await axios.post(
//         "http://localhost:5000/filesUpload/upload",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       const { _id: id } = uploadResponse.data;
//       setFileUploadId(id); // Set fileUploadId here
//       setSuccess("Files uploaded successfully!");
//       setError(null);
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpGeneration = async () => {
//     if (!phone || !fileUploadId) {
//       setError("Please enter a phone number and upload files first.");
//       return;
//     }

//     setLoading(true);

//     const link = "http://example.com/rating-link";

//     try {
//       await axios.post("http://localhost:5000/otp/send", {
//         phone,
//         filesUpload: fileUploadId,
//         link,
//       });

//       setSuccess("OTP sent successfully!");
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpVerification = async () => {
//     if (!fileUploadId) {
//       setError("Please complete the file upload first.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:5000/otp/verify", {
//         phone,
//         otp,
//         filesUpload: fileUploadId, // Include fileUploadId here
//       });

//       setSnackbarMessage("OTP verified successfully!");
//       setSnackbarSeverity("success");
//       navigate("/serviceProvider/bookingList");
//     } catch (err) {
//       setSnackbarMessage(
//         err.response?.data?.message || "OTP verification failed!"
//       );
//       setSnackbarSeverity("error");
//     } finally {
//       setLoading(false);
//       setOpenSnackbar(true);
//     }
//   };

//   return (
//     <GradientBackground>
//       {/* Card for Generating OTP */}
//       <AnimatedCard>
//         <CardContent>
//           <Typography variant="h4" gutterBottom>
//             Generate OTP
//           </Typography>
//           <TextField
//             label="Phone Number"
//             type="tel"
//             fullWidth
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <Input
//             type="file"
//             inputProps={{ multiple: true }}
//             onChange={handleFileChange}
//             fullWidth
//             margin="normal"
//           />
//           <Box mt={2}>
//             {files.length !== 2 && (
//               <Typography color="error">
//                 You must upload exactly 2 images.
//               </Typography>
//             )}
//           </Box>
//           <Box mt={2}>
//             {loading ? (
//               <CircularProgress />
//             ) : (
//               <>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleFileUpload}
//                   fullWidth
//                   disabled={files.length !== 2}>
//                   Upload Files
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={handleOtpGeneration}
//                   fullWidth
//                   disabled={!fileUploadId || !phone}>
//                   Generate OTP
//                 </Button>
//               </>
//             )}
//           </Box>
//           {error && (
//             <Typography color="error" mt={2}>
//               {error}
//             </Typography>
//           )}
//           {success && (
//             <Typography color="success" mt={2}>
//               {success}
//             </Typography>
//           )}
//         </CardContent>
//       </AnimatedCard>

//       {/* Card for Verifying OTP */}
//       <AnimatedCard>
//         <CardContent>
//           <Typography variant="h4" gutterBottom>
//             Verify OTP
//           </Typography>
//           <TextField
//             label="Phone Number"
//             type="tel"
//             fullWidth
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <TextField
//             label="OTP"
//             type="text"
//             fullWidth
//             margin="normal"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <Box mt={2}>
//             {loading ? (
//               <CircularProgress />
//             ) : (
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleOtpVerification}
//                 fullWidth
//                 disabled={!otp || !phone || !fileUploadId}>
//                 Verify OTP
//               </Button>
//             )}
//           </Box>
//         </CardContent>
//       </AnimatedCard>

//       {/* Snackbar for Notifications */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}>
//         <Alert
//           onClose={() => setOpenSnackbar(false)}
//           severity={snackbarSeverity}
//           sx={{ width: "100%" }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </GradientBackground>
//   );
// };

// export default OtpAndUpload;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  TextField,
  Input,
  CircularProgress,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientBackground = styled(Box)({
  background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const AnimatedCard = styled(Card)({
  animation: "$fadeIn 1s ease-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  width: "100%",
  maxWidth: "600px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const OtpAndUpload = () => {
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState([]);
  const [fileUploadId, setFileUploadId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [otp, setOtp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();
  const { bookingId } = useParams(); // Get bookingId from URL parameters

  useEffect(() => {
    if (bookingId) {
      // Optionally, you could fetch details related to this bookingId if needed
      console.log("Booking ID from URL:", bookingId);
    }
  }, [bookingId]);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleFileUpload = async () => {
    if (files.length !== 2) {
      setError("You must upload exactly 2 images.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    for (const file of files) {
      formData.append("files", file);
    }

    try {
      const uploadResponse = await axios.post(
        "http://localhost:5000/filesUpload/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const { _id: id } = uploadResponse.data;
      setFileUploadId(id);
      setSuccess("Files uploaded successfully!");
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpGeneration = async () => {
    if (!phone || !fileUploadId) {
      setError("Please enter a phone number and upload files first.");
      return;
    }

    setLoading(true);

    const link = "http://example.com/rating-link";

    try {
      await axios.post("http://localhost:5000/otp/send", {
        phone,
        filesUpload: fileUploadId,
        link,
        bookingId, // Include bookingId here
      });

      setSuccess("OTP sent successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async () => {
    if (!fileUploadId) {
      setError("Please complete the file upload first.");
      return;
    }

    setLoading(true);

    try {
      // Verify OTP
      await axios.post("http://localhost:5000/otp/verify", {
        phone,
        otp,
        filesUpload: fileUploadId,
        bookingId, // Include bookingId here
      });

      console.log(bookingId);

      // Update booking status to completed
      await axios.put(`http://localhost:5000/booking/${bookingId}`, {
        status: "completed",
      });

      setSnackbarMessage("OTP verified and booking completed successfully!");
      setSnackbarSeverity("success");
      navigate("/serviceProvider/bookingList");
    } catch (err) {
      setSnackbarMessage(
        err.response?.data?.message ||
          "OTP verification or booking update failed!"
      );
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  return (
    <GradientBackground>
      {/* Card for Generating OTP */}
      <AnimatedCard>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Generate OTP
          </Typography>
          <TextField
            label="Phone Number"
            type="tel"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="file"
            inputProps={{ multiple: true }}
            onChange={handleFileChange}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            {files.length !== 2 && (
              <Typography color="error">
                You must upload exactly 2 images.
              </Typography>
            )}
          </Box>
          <Box mt={2}>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFileUpload}
                  fullWidth
                  disabled={files.length !== 2}>
                  Upload Files
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOtpGeneration}
                  fullWidth
                  disabled={!fileUploadId || !phone}>
                  Generate OTP
                </Button>
              </>
            )}
          </Box>
          {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success" mt={2}>
              {success}
            </Typography>
          )}
        </CardContent>
      </AnimatedCard>

      {/* Card for Verifying OTP */}
      <AnimatedCard>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Verify OTP
          </Typography>
          <TextField
            label="Phone Number"
            type="tel"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="OTP"
            type="text"
            fullWidth
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Box mt={2}>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleOtpVerification}
                fullWidth
                disabled={!otp || !phone || !fileUploadId}>
                Verify OTP
              </Button>
            )}
          </Box>
        </CardContent>
      </AnimatedCard>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}>
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </GradientBackground>
  );
};

export default OtpAndUpload;
