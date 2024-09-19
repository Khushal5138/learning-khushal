// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "../actions/authActions";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Snackbar,
//   Alert,
//   Box,
//   CircularProgress,
// } from "@mui/material";

// const Login = () => {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);
//   const navigate = useNavigate(); // for navigation

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(phone, password))
//       .then(() => {
//         setSnackbarSeverity("success");
//         setSnackbarMessage("Login successful!");
//         setSnackbarOpen(true);
//         setTimeout(() => {
//           navigate("/dashboard"); // Route to any other page after login
//         }, 1000);
//       })
//       .catch(() => {
//         setSnackbarSeverity("error");
//         setSnackbarMessage(error || "Login failed. Please try again.");
//         setSnackbarOpen(true);
//       });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to right, #6a11cb, #2575fc)",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}>
//       <Container
//         maxWidth="xs"
//         sx={{
//           backgroundColor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//           padding: 4,
//         }}>
//         <Typography variant="h4" component="h1" gutterBottom align="center">
//           Customer Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
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
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               disabled={loading}
//               fullWidth>
//               {loading ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </Box>
//           {error && (
//             <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
//               {error}
//             </Typography>
//           )}
//         </form>
//       </Container>

//       {/* Snackbar for success/error messages */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}>
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbarSeverity}
//           sx={{ width: "100%" }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
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

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(phone, password));
    setSnackbarMessage("Login Successful!");
    navigate("/customer/HomePage");
    setSnackbarOpen(true);
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
          Customer Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            severity="success"
            sx={{ width: "100%" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </AnimatedBox>
  );
};

export default Login;
