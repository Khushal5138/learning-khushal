// import React from "react";
// import { Button, Box, Grid } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/system"; // Material UI v5 approach

// // Custom styles using styled API
// const Root = styled("div")(({ theme }) => ({
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "relative",
//   overflow: "hidden",
//   background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
//   animation: "bgAnimation 10s ease infinite",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: "-50%",
//     left: "-50%",
//     width: "200%",
//     height: "200%",
//     background: "linear-gradient(60deg, #ff9a9e, #fad0c4, #fad0c4)",
//     animation: "bgMove 20s ease infinite",
//   },
//   "@keyframes bgAnimation": {
//     "0%": { background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)" },
//     "50%": { background: "linear-gradient(120deg, #fbc2eb 0%, #a18cd1 100%)" },
//     "100%": { background: "linear-gradient(120deg, #ff9a9e 0%, #fad0c4 100%)" },
//   },
//   "@keyframes bgMove": {
//     "0%": { transform: "rotate(0deg)" },
//     "100%": { transform: "rotate(360deg)" },
//   },
// }));

// const CustomButton = styled(Button)(({ theme }) => ({
//   color: "#ffffff",
//   fontSize: "1.5rem",
//   padding: "1rem 2rem",
//   borderRadius: "50px",
//   transition: "background-color 0.3s ease",
//   backgroundColor: "#ffffff20", // Translucent background
//   "&:hover": {
//     backgroundColor: "#ffffff40", // Darker translucent on hover
//   },
//   textTransform: "none", // Prevent uppercase
// }));

// const RoleSelection = () => {
//   const navigate = useNavigate();

//   const handleCustomerClick = () => {
//     navigate("/login"); // Redirects to the login page
//   };

//   return (
//     <Root>
//       <Grid container direction="column" alignItems="center" spacing={3}>
//         <Grid item>
//           <CustomButton onClick={() => alert("Service Provider Clicked!")}>
//             Service Provider
//           </CustomButton>
//         </Grid>
//         <Grid item>
//           <CustomButton onClick={handleCustomerClick}>Customer</CustomButton>
//         </Grid>
//       </Grid>
//     </Root>
//   );
// };

// export default RoleSelection;

import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system"; // Material UI v5 approach

// Custom styles using styled API
const Root = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
  animation: "bgAnimation 10s ease infinite",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "linear-gradient(60deg, #ff9a9e, #fad0c4, #fad0c4)",
    animation: "bgMove 20s ease infinite",
  },
  "@keyframes bgAnimation": {
    "0%": { background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)" },
    "50%": { background: "linear-gradient(120deg, #fbc2eb 0%, #a18cd1 100%)" },
    "100%": { background: "linear-gradient(120deg, #ff9a9e 0%, #fad0c4 100%)" },
  },
  "@keyframes bgMove": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

// Custom button with hover effects and size adjustments
const CustomButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  fontSize: "2rem", // Bigger font size for bigger buttons
  padding: "1.5rem 3rem", // Bigger padding for larger button
  borderRadius: "60px",
  transition: "background-color 0.5s ease, transform 0.5s ease",
  backgroundColor: "#ffffff30", // Lighter translucent background
  border: "2px solid #ffffff70", // Subtle border
  "&:hover": {
    backgroundColor: "#ff4081", // New color on hover
    color: "#ffffff",
    border: "2px solid #ffffff", // Bold border on hover
    transform: "scale(1.1)", // Scaling up on hover
    boxShadow: "0 0 15px rgba(255, 64, 129, 0.5)", // Glowing effect
  },
  textTransform: "none", // Prevent uppercase
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(120deg, #fbc2eb, #a18cd1)",
    zIndex: -1,
    opacity: 0,
    transition: "opacity 0.5s ease",
  },
  "&:hover::before": {
    opacity: 1,
  },
}));

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate("/customer/login"); // Redirects to the login page
  };

  return (
    <Root>
      <Grid container direction="column" alignItems="center" spacing={5}>
        <Grid item>
          <CustomButton onClick={() => navigate("/serviceProvider/login")}>
            Service Provider
          </CustomButton>
        </Grid>
        <Grid item>
          <CustomButton onClick={handleCustomerClick}>Customer</CustomButton>
        </Grid>
      </Grid>
    </Root>
  );
};

export default RoleSelection;
