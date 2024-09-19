// ServiceProviderLogin.js

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../actions/authActions"; // Import the login action
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   TextField,
//   Button,
//   Snackbar,
//   Alert,
//   Typography,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Reusing the AnimatedBox styling
// const AnimatedBox = styled(Box)(/* same styling as before */);

// const ServiceProviderLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth); // Assumes auth state
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login("serviceProvider", { email, password })); // Pass the type and credentials
//     setSnackbarMessage("Login Successful!");
//     navigate("/dashboard"); // Redirect to service provider dashboard
//     setSnackbarOpen(true);
//   };

//   const handleClose = () => setSnackbarOpen(false);

//   return (
//     <AnimatedBox>
//       <Box
//         sx={{
//           width: "400px",
//           background: "rgba(255, 255, 255, 0.9)",
//           padding: "30px",
//           borderRadius: "10px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           textAlign: "center",
//         }}>
//         <Typography variant="h5" gutterBottom>
//           Service Provider Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Email"
//             type="email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ marginTop: "16px" }}
//             disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </Button>
//         </form>
//         {error && <Typography color="error">{error}</Typography>}

//         <Snackbar
//           open={snackbarOpen}
//           autoHideDuration={3000}
//           onClose={handleClose}>
//           <Alert
//             onClose={handleClose}
//             severity="success"
//             sx={{ width: "100%" }}>
//             {snackbarMessage}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </AnimatedBox>
//   );
// };

// export default ServiceProviderLogin;

// components/ServiceProviderLogin.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceLogin } from "../actions/serviceAuthActions"; // Updated action import
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

// Reusing the AnimatedBox styling
const AnimatedBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  animation: "moveGradient 10s ease infinite",
  background: "linear-gradient(-45deg, #6a11cb, #2575fc, #ff5722, #00bcd4)",
  backgroundSize: "400% 400%",
  "@keyframes moveGradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
});

const ServiceProviderLogin = () => {
  const [email, setEmail] = useState(""); // Email field based on schema
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.serviceAuth); // Updated selector
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch login for service providers
    await dispatch(serviceLogin(email, password)); // Make sure this action calls the correct API endpoint

    // If login is successful, navigate to homepage
    if (user) {
      setSnackbarMessage("Login Successful!");
      setSnackbarOpen(true);
      navigate("/serviceProvider/HomePage"); // Navigate immediately after successful login
    } else if (error) {
      setSnackbarMessage(error); // Show error in snackbar
      setSnackbarOpen(true);
    }
  };

  const handleClose = () => setSnackbarOpen(false);

  return (
    <AnimatedBox>
      <Box
        sx={{
          width: "400px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}>
        <Typography variant="h5" gutterBottom>
          Service Provider Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "16px" }}
            disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={error ? "error" : "success"}
            sx={{ width: "100%" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </AnimatedBox>
  );
};

export default ServiceProviderLogin;
