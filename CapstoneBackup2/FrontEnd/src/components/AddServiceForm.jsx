import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled components for background animation
const Background = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(45deg, #ff6e40, #ffab40, #ffd740, #ff6e40)",
  backgroundSize: "600% 600%",
  animation: "gradientAnimation 15s ease infinite",
  zIndex: -1,
  "@keyframes gradientAnimation": {
    "0%": { backgroundPosition: "0% 0%" },
    "50%": { backgroundPosition: "100% 100%" },
    "100%": { backgroundPosition: "0% 0%" },
  },
});

// Main container for the form
const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
  zIndex: 1,
});

// Form card styling
const FormCard = styled(Card)({
  width: "400px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  borderRadius: "8px",
});

const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    serviceProvider: "",
    category: "",
    price: "",
    ratings: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Service added successfully");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Background />
      <Container>
        <FormCard>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Add New Service
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Service Provider"
                    name="serviceProvider"
                    value={formData.serviceProvider}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ratings (comma separated)"
                    name="ratings"
                    value={formData.ratings}
                    onChange={handleChange}
                    placeholder="e.g., 5, 4, 3"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Add Service
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </FormCard>
      </Container>
    </>
  );
};

export default AddServiceForm;
