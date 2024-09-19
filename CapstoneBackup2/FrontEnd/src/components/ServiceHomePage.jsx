// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
// import { styled } from "@mui/system";
// import { SERVICE_LOGIN_FAILURE } from "../actions/serviceAuthActions"; // Import the failure action type

// // Styled components using Material-UI's styled API
// const AnimatedBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh",
//   animation: "moveGradient 15s ease infinite",
//   background: "linear-gradient(-45deg, #ff6b6b, #f06595, #d4a5a5, #e6c9a8)",
//   backgroundSize: "400% 400%",
//   "@keyframes moveGradient": {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" },
//   },
// }));

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#333",
//   boxShadow: "none",
// }));

// // Navbar component with logout button
// const Navbar = ({ onLogout }) => (
//   <StyledAppBar position="static">
//     <Toolbar>
//       <Typography variant="h6" sx={{ flexGrow: 1 }}>
//         Service Provider Home
//       </Typography>
//       <Button color="inherit" onClick={onLogout}>
//         Logout
//       </Button>
//     </Toolbar>
//   </StyledAppBar>
// );

// const ServiceProviderHomePage = () => {
//   const user = useSelector((state) => state.serviceAuth.user); // Assuming serviceAuth.user holds the logged-in user info
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Handle logout functionality
//   const handleLogout = () => {
//     // Remove token from localStorage
//     localStorage.removeItem("token");

//     // Dispatch an action to reset the auth state
//     dispatch({
//       type: SERVICE_LOGIN_FAILURE,
//       payload: null, // Reset the user state
//     });

//     // Navigate to the service provider login page
//     navigate("/serviceProvider/login");
//   };

//   return (
//     <div>
//       <Navbar onLogout={handleLogout} />
//       <AnimatedBox>
//         <Typography variant="h4" color="white">
//           Welcome,{" "}
//           {user && user.serviceProvider ? user.serviceProvider.name : "Guest"}
//         </Typography>
//       </AnimatedBox>
//     </div>
//   );
// };

// export default ServiceProviderHomePage;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { SERVICE_LOGIN_FAILURE } from "../actions/serviceAuthActions"; // Import the failure action type

// Styled components using Material-UI's styled API
const AnimatedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  animation: "moveGradient 15s ease infinite",
  background: "linear-gradient(-45deg, #ff6b6b, #f06595, #d4a5a5, #e6c9a8)",
  backgroundSize: "400% 400%",
  "@keyframes moveGradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#333",
  boxShadow: "none",
}));

// Navbar component with logout and dashboard buttons
const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  // Function to navigate to /dashboard
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Service Provider Home
        </Typography>

        {/* Add Service Button */}
        <Button
          color="inherit"
          onClick={() => handleNavigate("/serviceProvider/addService")}>
          Add Service
        </Button>

        {/* Orders Button */}
        <Button
          color="inherit"
          onClick={() => handleNavigate("/serviceProvider/bookingList")}>
          Orders
        </Button>

        {/* Logout Button */}
        <Button color="inherit" onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

const ServiceProviderHomePage = () => {
  const user = useSelector((state) => state.serviceAuth.user); // Assuming serviceAuth.user holds the logged-in user info
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Dispatch an action to reset the auth state
    dispatch({
      type: SERVICE_LOGIN_FAILURE,
      payload: null, // Reset the user state
    });

    // Navigate to the service provider login page
    navigate("/serviceProvider/login");
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <AnimatedBox>
        <Typography variant="h4" color="white">
          Welcome,{" "}
          {user && user.serviceProvider ? user.serviceProvider.name : "Guest"}
        </Typography>
      </AnimatedBox>
    </div>
  );
};

export default ServiceProviderHomePage;
