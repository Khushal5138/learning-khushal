import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

// Styled components using Material-UI's styled API
const GradientBackground = styled("div")(({ theme }) => ({
  width: "100%", // Ensures full width
  minHeight: "100vh", // Ensures full height of viewport
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(-45deg, #ff6b6b, #f06595, #d85a7e, #6a1b9a)",
  backgroundSize: "400% 400%",
  animation: "gradientShift 15s ease infinite",
  "@keyframes gradientShift": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

const CenteredButton = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(2),
}));

const BookingForm = () => {
  const { state } = useLocation();
  const { serviceId, serviceProviderId } = state || {};

  // Get customerId from Redux store
  const customerId = useSelector((state) => {
    console.log("Redux state:", state); // Debugging: log the entire state
    console.log("Customer ID from Redux:", state.auth.user?.id); // Debugging: log the customerId
    return state.auth.user?.id || "";
  });

  // Set today's date as default value
  const todayDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    serviceId: serviceId || "",
    serviceProviderId: serviceProviderId || "",
    customerId: customerId || "",
    bookingDate: todayDate,
    location: "",
    status: "pending", // Default status
    proofImage: "",
    otp: "", // Default empty, to be set by the backend
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  React.useEffect(() => {
    // Update formData when customerId changes
    setFormData((prevData) => ({ ...prevData, customerId }));
  }, [customerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/booking",
        formData
      );
      console.log("Form submission response:", response.data);
      // Show snackbar on successful form submission
      setSnackbarMessage("Booking submitted successfully!");
      setOpenSnackbar(true);
      navigate("/customer/HomePage");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbarMessage("Failed to submit booking.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <GradientBackground>
      <Card sx={{ maxWidth: 600, width: "100%", padding: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Book a Service
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Service ID"
                  name="serviceId"
                  value={formData.serviceId}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Service Provider ID"
                  name="serviceProviderId"
                  value={formData.serviceProviderId}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Customer ID"
                  name="customerId"
                  value={formData.customerId}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Booking Date"
                  name="bookingDate"
                  type="date"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Status"
                  name="status"
                  value={formData.status}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Proof Image"
                  name="proofImage"
                  value={formData.proofImage}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="OTP"
                  name="otp"
                  type="number"
                  value={formData.otp}
                  disabled
                />
              </Grid>
              <CenteredButton item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </CenteredButton>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage.includes("Failed") ? "error" : "success"}
          sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </GradientBackground>
  );
};

export default BookingForm;
