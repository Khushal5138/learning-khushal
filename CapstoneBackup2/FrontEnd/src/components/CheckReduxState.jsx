import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";

const CheckReduxState = () => {
  // Accessing the entire Redux state
  const state = useSelector((state) => state);

  // Logging the entire state to the console
  console.log("Redux State:", state);

  return (
    <Box
      sx={{
        padding: "20px",
        margin: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f0f0f0",
      }}>
      <Typography variant="h5">Check Redux State</Typography>

      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6">Redux State:</Typography>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Box>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
        onClick={() => console.log("Redux State:", state)}>
        Log Redux State to Console
      </Button>
    </Box>
  );
};

export default CheckReduxState;
