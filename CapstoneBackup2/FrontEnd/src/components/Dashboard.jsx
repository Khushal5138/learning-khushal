import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Add dashboard content here */}
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Dashboard;
