// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import {
// //   Box,
// //   Card,
// //   CardContent,
// //   Typography,
// //   Grid,
// //   Button,
// // } from "@mui/material";
// // import { styled } from "@mui/system";
// // import StarIcon from "@mui/icons-material/Star";
// // import StarBorderIcon from "@mui/icons-material/StarBorder";

// // // Styled component for the service card
// // const ServiceCard = styled(Card)(({ theme }) => ({
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   width: "300px",
// //   margin: "10px",
// //   transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //   border: "2px solid #00bcd4",
// //   borderRadius: "12px",
// //   backgroundColor: "#ffffff",
// //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
// //   "&:hover": {
// //     transform: "scale(1.05)",
// //     boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
// //     borderColor: "#4caf50",
// //     backgroundColor: "#e8f5e9",
// //   },
// // }));

// // const ServiceDisplay = () => {
// //   const { categoryId } = useParams();
// //   const [services, setServices] = useState([]);
// //   const [expandedService, setExpandedService] = useState(null);
// //   const [showRatings, setShowRatings] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchServices = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get("http://localhost:5000/services");
// //         const allServices = response.data;

// //         // Filter services by category ID
// //         const filteredServices = allServices.filter(
// //           (service) =>
// //             service.category &&
// //             service.category._id &&
// //             service.category._id === categoryId
// //         );

// //         setServices(filteredServices);
// //       } catch (error) {
// //         console.error("Error fetching services:", error);
// //         setError("Error fetching services. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchServices();
// //   }, [categoryId]);

// //   const handleToggleDetails = (serviceId) => {
// //     setExpandedService((prev) => (prev === serviceId ? null : serviceId));
// //   };

// //   const handleShowHideRatings = (serviceId) => {
// //     setShowRatings((prev) => ({
// //       ...prev,
// //       [serviceId]: !prev[serviceId],
// //     }));
// //   };

// //   const handleBookNow = (service) => {
// //     const { _id: serviceId, serviceProvider, customer } = service;
// //     const serviceProviderId = serviceProvider ? serviceProvider._id : "";
// //     const customerId = customer ? customer._id : "";

// //     navigate("/customer/categories/bookingForm", {
// //       state: { serviceId, serviceProviderId, customerId },
// //     });
// //   };

// //   // Calculate average rating score
// //   const calculateAverageRating = (ratings) => {
// //     if (!ratings || ratings.length === 0) return null;
// //     const totalScore = ratings.reduce((acc, rating) => acc + rating.score, 0);
// //     return (totalScore / ratings.length).toFixed(1); // Return average with 1 decimal
// //   };

// //   // Render stars based on score
// //   const renderStars = (score) => {
// //     return [...Array(5)].map((_, index) => {
// //       return index < score ? (
// //         <StarIcon key={index} sx={{ color: "#FFD700" }} />
// //       ) : (
// //         <StarBorderIcon key={index} sx={{ color: "#FFD700" }} />
// //       );
// //     });
// //   };

// //   // Render stars based on score for ratings
// //   const renderRatingStars = (score) => {
// //     return [...Array(5)].map((_, index) => {
// //       return index < score ? (
// //         <StarIcon key={index} sx={{ color: "#FFD700" }} />
// //       ) : (
// //         <StarBorderIcon key={index} sx={{ color: "#FFD700" }} />
// //       );
// //     });
// //   };

// //   if (loading) return <Typography variant="h6">Loading...</Typography>;
// //   if (error)
// //     return (
// //       <Typography variant="h6" color="error">
// //         {error}
// //       </Typography>
// //     );

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         width: "100%",
// //         padding: "20px",
// //         margin: "0 auto",
// //         background: "linear-gradient(135deg, #1a237e, #283593, #3f51b5)",
// //         animation: "bg-animation 15s ease infinite",
// //         "@keyframes bg-animation": {
// //           "0%": { backgroundPosition: "0% 50%" },
// //           "50%": { backgroundPosition: "100% 50%" },
// //           "100%": { backgroundPosition: "0% 50%" },
// //         },
// //       }}>
// //       <Typography
// //         variant="h4"
// //         gutterBottom
// //         sx={{ textAlign: "center", color: "#ffffff" }}>
// //         Services in This Category
// //       </Typography>
// //       <Grid container spacing={3} justifyContent="center">
// //         {services.length > 0 ? (
// //           services.map((service) => {
// //             const averageRating = calculateAverageRating(service.ratings);
// //             return (
// //               <Grid item key={service._id}>
// //                 <ServiceCard>
// //                   <CardContent
// //                     sx={{
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       textAlign: "center",
// //                       padding: "16px",
// //                       transition: "height 0.3s ease",
// //                       height:
// //                         expandedService === service._id ? "auto" : "150px",
// //                     }}>
// //                     <Typography variant="h6">{service.name}</Typography>
// //                     <Typography variant="body2" color="textSecondary">
// //                       {service.description}
// //                     </Typography>
// //                     {expandedService === service._id && (
// //                       <Box mt={2}>
// //                         <Typography variant="body2">
// //                           <strong>Price:</strong> ${service.price}
// //                         </Typography>
// //                         <Typography variant="body2">
// //                           <strong>Category:</strong> {service.category?.name} -{" "}
// //                           {service.category?.description}
// //                         </Typography>
// //                         <Typography variant="body2" sx={{ mt: 2 }}>
// //                           <strong>Service Provider Details:</strong>
// //                         </Typography>
// //                         <Typography variant="body2">
// //                           <strong>Name:</strong> {service.serviceProvider?.name}
// //                         </Typography>
// //                         <Typography variant="body2">
// //                           <strong>Email:</strong>{" "}
// //                           {service.serviceProvider?.email}
// //                         </Typography>
// //                         <Typography variant="body2">
// //                           <strong>Phone:</strong>{" "}
// //                           {service.serviceProvider?.phone}
// //                         </Typography>
// //                         <Typography variant="body2">
// //                           <strong>Price Range:</strong>{" "}
// //                           {service.serviceProvider?.priceRange}
// //                         </Typography>
// //                         <Typography variant="body2" sx={{ mt: 2 }}>
// //                           <strong>Ratings:</strong>{" "}
// //                           {averageRating ? `${averageRating}/5` : "No ratings"}
// //                         </Typography>
// //                         {renderStars(Math.round(averageRating))}{" "}
// //                         {/* Show star rating */}
// //                         {service.ratings && service.ratings.length > 0 && (
// //                           <Box mt={2}>
// //                             <Button
// //                               variant="outlined"
// //                               color="info"
// //                               onClick={() =>
// //                                 handleShowHideRatings(service._id)
// //                               }>
// //                               {showRatings[service._id]
// //                                 ? "Hide Ratings"
// //                                 : "Show Ratings"}
// //                             </Button>
// //                             {showRatings[service._id] && (
// //                               <Box mt={2}>
// //                                 {service.ratings.map((rating) => (
// //                                   <Box key={rating._id} sx={{ mt: 1 }}>
// //                                     <Typography variant="body2">
// //                                       <strong>Score:</strong>{" "}
// //                                       {renderRatingStars(rating.score)}
// //                                     </Typography>
// //                                     <Typography variant="body2">
// //                                       <strong>Comment:</strong> {rating.comment}
// //                                     </Typography>
// //                                     <Typography variant="body2">
// //                                       <strong>Customer ID:</strong>{" "}
// //                                       {rating.customerID}
// //                                     </Typography>
// //                                     <Typography variant="body2">
// //                                       <strong>Date:</strong>{" "}
// //                                       {new Date(
// //                                         rating.createdAt
// //                                       ).toLocaleDateString()}
// //                                     </Typography>
// //                                   </Box>
// //                                 ))}
// //                               </Box>
// //                             )}
// //                           </Box>
// //                         )}
// //                       </Box>
// //                     )}
// //                     <Box mt={2} sx={{ display: "flex", gap: "10px" }}>
// //                       <Button
// //                         variant="contained"
// //                         color="primary"
// //                         onClick={() => handleBookNow(service)}>
// //                         Book Now
// //                       </Button>
// //                       <Button
// //                         variant="outlined"
// //                         color="secondary"
// //                         onClick={() => handleToggleDetails(service._id)}>
// //                         {expandedService === service._id
// //                           ? "Hide Details"
// //                           : "View Details"}
// //                       </Button>
// //                     </Box>
// //                   </CardContent>
// //                 </ServiceCard>
// //               </Grid>
// //             );
// //           })
// //         ) : (
// //           <Typography variant="h6" sx={{ color: "#ffffff" }}>
// //             No services found in this category.
// //           </Typography>
// //         )}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default ServiceDisplay;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Button,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// // Styled component for the service card
// const ServiceCard = styled(Card)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   width: "300px",
//   margin: "10px",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   border: "2px solid #00bcd4",
//   borderRadius: "12px",
//   backgroundColor: "#ffffff",
//   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
//     borderColor: "#4caf50",
//     backgroundColor: "#e8f5e9",
//   },
// }));

// const ServiceDisplay = () => {
//   const { categoryId } = useParams();
//   const [services, setServices] = useState([]);
//   const [expandedService, setExpandedService] = useState(null);
//   const [showRatings, setShowRatings] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/services");
//         const allServices = response.data;

//         // Filter services by category ID
//         const filteredServices = allServices.filter(
//           (service) =>
//             service.category &&
//             service.category._id &&
//             service.category._id === categoryId
//         );

//         setServices(filteredServices);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//         setError("Error fetching services. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [categoryId]);

//   const handleToggleDetails = (serviceId) => {
//     setExpandedService((prev) => (prev === serviceId ? null : serviceId));
//   };

//   const handleShowHideRatings = (serviceId) => {
//     setShowRatings((prev) => ({
//       ...prev,
//       [serviceId]: !prev[serviceId],
//     }));
//   };

//   const handleBookNow = (service) => {
//     const { _id: serviceId, serviceProvider, customer } = service;
//     const serviceProviderId = serviceProvider ? serviceProvider._id : "";
//     const customerId = customer ? customer._id : "";

//     navigate("/customer/categories/bookingForm", {
//       state: { serviceId, serviceProviderId, customerId },
//     });
//   };

//   // Calculate average rating score
//   const calculateAverageRating = (ratings) => {
//     if (!ratings || ratings.length === 0) return null;
//     const totalScore = ratings.reduce((acc, rating) => acc + rating.score, 0);
//     return (totalScore / ratings.length).toFixed(1); // Return average with 1 decimal
//   };

//   // Render stars based on score
//   const renderStars = (score) => {
//     return [...Array(5)].map((_, index) => {
//       return index < score ? (
//         <StarIcon key={index} sx={{ color: "#FFD700" }} />
//       ) : (
//         <StarBorderIcon key={index} sx={{ color: "#FFD700" }} />
//       );
//     });
//   };

//   // Render stars based on score for ratings
//   const renderRatingStars = (score) => {
//     return [...Array(5)].map((_, index) => {
//       return index < score ? (
//         <StarIcon key={index} sx={{ color: "#FFD700" }} />
//       ) : (
//         <StarBorderIcon key={index} sx={{ color: "#FFD700" }} />
//       );
//     });
//   };

//   if (loading) return <Typography variant="h6">Loading...</Typography>;
//   if (error)
//     return (
//       <Typography variant="h6" color="error">
//         {error}
//       </Typography>
//     );

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         width: "100%",
//         padding: "20px",
//         margin: "0 auto",
//         background: "linear-gradient(135deg, #1a237e, #283593, #3f51b5)",
//         animation: "bg-animation 15s ease infinite",
//         "@keyframes bg-animation": {
//           "0%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//           "100%": { backgroundPosition: "0% 50%" },
//         },
//       }}>
//       <Typography
//         variant="h4"
//         gutterBottom
//         sx={{ textAlign: "center", color: "#ffffff" }}>
//         Services in This Category
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {services.length > 0 ? (
//           services.map((service) => {
//             const averageRating = calculateAverageRating(service.ratings);
//             return (
//               <Grid item key={service._id}>
//                 <ServiceCard>
//                   <CardContent
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       textAlign: "center",
//                       padding: "16px",
//                       transition: "height 0.3s ease",
//                       height:
//                         expandedService === service._id ? "auto" : "150px",
//                     }}>
//                     <Typography variant="h6">{service.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {service.description}
//                     </Typography>
//                     {expandedService === service._id && (
//                       <Box mt={2}>
//                         <Typography variant="body2">
//                           <strong>Price:</strong> ${service.price}
//                         </Typography>
//                         <Typography variant="body2">
//                           <strong>Category:</strong> {service.category?.name} -{" "}
//                           {service.category?.description}
//                         </Typography>
//                         <Typography variant="body2" sx={{ mt: 2 }}>
//                           <strong>Service Provider Details:</strong>
//                         </Typography>
//                         <Typography variant="body2">
//                           <strong>Name:</strong> {service.serviceProvider?.name}
//                         </Typography>
//                         <Typography variant="body2">
//                           <strong>Email:</strong>{" "}
//                           {service.serviceProvider?.email}
//                         </Typography>
//                         <Typography variant="body2">
//                           <strong>Phone:</strong>{" "}
//                           {service.serviceProvider?.phone}
//                         </Typography>
//                         <Typography variant="body2">
//                           <strong>Price Range:</strong>{" "}
//                           {service.serviceProvider?.priceRange}
//                         </Typography>
//                         <Typography variant="body2" sx={{ mt: 2 }}>
//                           <strong>Ratings:</strong>{" "}
//                           {averageRating ? `${averageRating}/5` : "No ratings"}
//                         </Typography>
//                         {renderStars(Math.round(averageRating))}{" "}
//                         {/* Show star rating */}
//                         {service.ratings && service.ratings.length > 0 && (
//                           <Box mt={2}>
//                             <Button
//                               variant="outlined"
//                               color="info"
//                               onClick={() =>
//                                 handleShowHideRatings(service._id)
//                               }>
//                               {showRatings[service._id]
//                                 ? "Hide Ratings"
//                                 : "Show Ratings"}
//                             </Button>
//                             {showRatings[service._id] && (
//                               <Box mt={2}>
//                                 {service.ratings.map((rating) => (
//                                   <Box key={rating._id} sx={{ mt: 1 }}>
//                                     <Typography variant="body2">
//                                       <strong>Score:</strong>{" "}
//                                       {renderRatingStars(rating.score)}
//                                     </Typography>
//                                     <Typography variant="body2">
//                                       <strong>Comment:</strong> {rating.comment}
//                                     </Typography>
//                                     <Typography variant="body2">
//                                       <strong>Customer ID:</strong>{" "}
//                                       {rating.customerID}
//                                     </Typography>
//                                     <Typography variant="body2">
//                                       <strong>Date:</strong>{" "}
//                                       {new Date(
//                                         rating.createdAt
//                                       ).toLocaleDateString()}
//                                     </Typography>
//                                   </Box>
//                                 ))}
//                               </Box>
//                             )}
//                           </Box>
//                         )}
//                       </Box>
//                     )}
//                     <Box mt={2} sx={{ display: "flex", gap: "10px" }}>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleBookNow(service)}>
//                         Book Now
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleToggleDetails(service._id)}>
//                         {expandedService === service._id
//                           ? "Hide Details"
//                           : "View Details"}
//                       </Button>
//                     </Box>
//                   </CardContent>
//                 </ServiceCard>
//               </Grid>
//             );
//           })
//         ) : (
//           <Typography variant="h6" sx={{ color: "#fff" }}>
//             No services found in this category.
//           </Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default ServiceDisplay;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Styled component for the service card
const ServiceCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  margin: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  border: "2px solid #00bcd4",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
    borderColor: "#4caf50",
    backgroundColor: "#e8f5e9",
  },
}));

const ServiceDisplay = () => {
  const { categoryId } = useParams();
  const [services, setServices] = useState([]);
  const [expandedService, setExpandedService] = useState(null);
  const [showRatings, setShowRatings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/services");
        const allServices = response.data;

        // Filter services by category ID
        const filteredServices = allServices.filter(
          (service) =>
            service.category &&
            service.category._id &&
            service.category._id === categoryId
        );

        setServices(filteredServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Error fetching services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [categoryId]);

  const handleToggleDetails = (serviceId) => {
    setExpandedService((prev) => (prev === serviceId ? null : serviceId));
  };

  const handleShowHideRatings = (serviceId) => {
    setShowRatings((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const handleBookNow = (service) => {
    const { _id: serviceId, serviceProvider, customer } = service;
    const serviceProviderId = serviceProvider ? serviceProvider._id : "";
    const customerId = customer ? customer._id : "";

    navigate("/customer/categories/bookingForm", {
      state: { serviceId, serviceProviderId, customerId },
    });
  };

  // Calculate average rating score
  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return null;
    const totalScore = ratings.reduce((acc, rating) => acc + rating.score, 0);
    return (totalScore / ratings.length).toFixed(1); // Return average with 1 decimal
  };

  // Render stars based on score
  const renderStars = (score) => {
    return [...Array(5)].map((_, index) => {
      return index < score ? (
        <StarIcon key={index} sx={{ color: "#FFD700" }} />
      ) : (
        <StarBorderIcon key={index} sx={{ color: "#FFD700" }} />
      );
    });
  };

  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (error)
    return (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #1a237e, #283593, #3f51b5)",
        animation: "bg-animation 15s ease infinite",
        "@keyframes bg-animation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", color: "#ffffff" }}>
        Services in This Category
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.length > 0 ? (
          services.map((service) => {
            const averageRating = calculateAverageRating(service.ratings);
            return (
              <Grid item key={service._id}>
                <ServiceCard>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: "16px",
                      transition: "height 0.3s ease",
                      height:
                        expandedService === service._id ? "auto" : "150px",
                    }}>
                    <Typography variant="h6">{service.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      ${service.price}
                    </Typography>
                    {expandedService === service._id && (
                      <Box mt={2}>
                        <Typography variant="body2">
                          <strong>Category:</strong> {service.category?.name} -{" "}
                          {service.category?.description}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                          <strong>Service Provider Details:</strong>
                        </Typography>
                        <Typography variant="body2">
                          <strong>Name:</strong> {service.serviceProvider?.name}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Email:</strong>{" "}
                          {service.serviceProvider?.email}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Phone:</strong>{" "}
                          {service.serviceProvider?.phone}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Price Range:</strong>{" "}
                          {service.serviceProvider?.priceRange}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                          <strong>Ratings:</strong>{" "}
                          {averageRating ? `${averageRating}/5` : "No ratings"}
                        </Typography>
                        {renderStars(Math.round(averageRating))}{" "}
                        {/* Show star rating */}
                        {service.ratings && service.ratings.length > 0 && (
                          <Box mt={2}>
                            <Button
                              variant="outlined"
                              color="info"
                              onClick={() =>
                                handleShowHideRatings(service._id)
                              }>
                              {showRatings[service._id]
                                ? "Hide Ratings"
                                : "Show Ratings"}
                            </Button>
                            {showRatings[service._id] && (
                              <Box mt={2}>
                                {service.ratings.map((rating) => (
                                  <Box key={rating._id} sx={{ mt: 1 }}>
                                    <Typography variant="body2">
                                      <strong>Score:</strong>{" "}
                                      {renderStars(rating.score)}
                                    </Typography>
                                    <Typography variant="body2">
                                      <strong>Comment:</strong> {rating.comment}
                                    </Typography>
                                    <Typography variant="body2">
                                      <strong>Customer ID:</strong>{" "}
                                      {rating.customerID}
                                    </Typography>
                                    <Typography variant="body2">
                                      <strong>Date:</strong>{" "}
                                      {new Date(
                                        rating.createdAt
                                      ).toLocaleDateString()}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </Box>
                        )}
                      </Box>
                    )}
                    <Box mt={2} sx={{ display: "flex", gap: "10px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleBookNow(service)}>
                        Book Now
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleToggleDetails(service._id)}>
                        {expandedService === service._id
                          ? "Hide Details"
                          : "View Details"}
                      </Button>
                    </Box>
                  </CardContent>
                </ServiceCard>
              </Grid>
            );
          })
        ) : (
          <Typography variant="h6" sx={{ color: "#fff" }}>
            No services found in this category.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ServiceDisplay;
