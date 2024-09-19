import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  MenuItem,
  Select,
  Button,
  Grid,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientBackground = styled(Box)({
  background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  height: "100vh",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [status, setStatus] = useState("");
  const [expandedBookingId, setExpandedBookingId] = useState(null);

  const navigate = useNavigate();

  const serviceProviderId = useSelector(
    (state) => state.serviceAuth.user?.serviceProvider?._id
  );

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log("Fetching bookings...");
        const response = await axios.get("http://localhost:5000/booking");
        console.log("API response:", response);

        const allBookings = response.data;
        console.log("All bookings:", allBookings);

        if (!serviceProviderId) {
          console.warn("No serviceProviderId available");
        } else {
          console.log(
            "Filtering bookings for serviceProviderId:",
            serviceProviderId
          );
        }

        const filteredBookings = allBookings.filter(
          (booking) => booking.serviceProviderId._id === serviceProviderId
        );

        console.log("Filtered bookings:", filteredBookings);

        setBookings(filteredBookings);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    if (serviceProviderId) {
      fetchBookings();
    } else {
      console.warn("serviceProviderId is not available, skipping fetch.");
      setLoading(false); // Ensure loading is false when there's no ID
    }
  }, [serviceProviderId]);

  const handleStatusChange = (bookingId) => (event) => {
    setSelectedBookingId(bookingId);
    setStatus(event.target.value);
  };

  const handleGenerateOtp = async (bookingId) => {
    navigate(`/serviceProvider/Otp/${bookingId}`);
  };

  const handleExpandInfo = (bookingId) => () => {
    setExpandedBookingId(expandedBookingId === bookingId ? null : bookingId);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (bookings.length === 0) {
    return (
      <Typography>No bookings found for this service provider.</Typography>
    );
  }

  return (
    <GradientBackground>
      <Box>
        <Typography variant="h5" align="center" marginBottom={10} fontSize={40}>
          Your Bookings
        </Typography>
        <Grid container spacing={2}>
          {bookings.map((booking) => (
            <Grid item xs={12} key={booking._id}>
              <AnimatedCard>
                <CardContent>
                  <Typography variant="h6">
                    Location: {booking.location}
                  </Typography>
                  <Typography>
                    Booking Date:{" "}
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </Typography>
                  <Typography>Status: {booking.status}</Typography>
                  <Typography>OTP: {booking.otp}</Typography>
                  <Select
                    value={
                      selectedBookingId === booking._id
                        ? status
                        : booking.status
                    }
                    onChange={handleStatusChange(booking._id)}
                    fullWidth
                    sx={{ marginTop: 2 }}>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                  </Select>
                  {selectedBookingId === booking._id &&
                    status === "completed" && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleGenerateOtp(booking._id)}
                        sx={{ marginTop: 2 }}>
                        Generate OTP
                      </Button>
                    )}
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleExpandInfo(booking._id)}
                    sx={{ marginTop: 2 }}>
                    More Info
                  </Button>
                  <Collapse in={expandedBookingId === booking._id}>
                    <Box sx={{ marginTop: 2 }}>
                      <Typography variant="body1">
                        Service: {booking.serviceId?.name || "N/A"}
                      </Typography>
                      <Typography variant="body1">
                        Service Description:{" "}
                        {booking.serviceId?.description || "N/A"}
                      </Typography>
                      <Typography variant="body1">
                        Customer Name: {booking.customerId?.name || "N/A"}
                      </Typography>
                      <Typography variant="body1">
                        Customer Phone: {booking.customerId?.phone || "N/A"}
                      </Typography>
                      {/* Add more details as needed */}
                    </Box>
                  </Collapse>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </GradientBackground>
  );
};

export default BookingsList;
