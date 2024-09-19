import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { LOGIN_FAILURE } from "../actions/authActions";

// Styled components using Material-UI's styled API
const AnimatedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  animation: "moveGradient 15s ease infinite",
  background: "linear-gradient(-45deg, #6a11cb, #2575fc, #ff5722, #00bcd4)",
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

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleNavigateToCategories = () => {
    navigate("/customer/categories");
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Customer Home
        </Typography>
        <Button color="inherit" onClick={handleNavigateToCategories}>
          Categories
        </Button>
        <Button color="inherit" onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

const CustomerHomePage = () => {
  const user = useSelector((state) => state.auth.user); // Assuming auth.user holds the logged-in user info
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Dispatch an action to reset the auth state
    dispatch({
      type: LOGIN_FAILURE,
      payload: null, // Optionally you can clear the error state
    });

    // Navigate to the customer login page
    navigate("/customer/login");
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <AnimatedBox>
        <Typography variant="h4" color="white">
          Welcome, {user && user.name ? user.name : "Guest"}
        </Typography>
      </AnimatedBox>
    </div>
  );
};

export default CustomerHomePage;
