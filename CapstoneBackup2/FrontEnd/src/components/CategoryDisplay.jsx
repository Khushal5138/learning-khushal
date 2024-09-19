// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   TextField,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/system";

// // Styled component for the animated background
// const AnimatedBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh",
//   animation: "moveGradient 20s ease infinite",
//   background: "linear-gradient(-45deg, #00bcd4, #4caf50, #81c784, #c8e6c9)",
//   backgroundSize: "400% 400%",
//   "@keyframes moveGradient": {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" },
//   },
// }));

// // Styled component for the category card
// const CategoryCard = styled(Card)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   width: "300px",
//   height: "200px",
//   margin: "10px",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
//   border: "1px solid #b2dfdb",
//   borderRadius: "8px",
//   overflow: "hidden",
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
//     borderColor: "#4caf50",
//   },
// }));

// // Styled component for the search bar container
// const SearchContainer = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: "-180px",
//   right: "-195px",
//   display: "flex",
//   alignItems: "center",
//   borderRadius: "4px",
//   border: "1px solid #b2dfdb",
//   backgroundColor: "#ffffff",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   maxWidth: "400px",
//   width: "100%",
// }));

// const CategoryDisplay = () => {
//   const [categories, setCategories] = useState([]);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/categories");
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleCategoryClick = () => {
//     navigate("services");
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <AnimatedBox>
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: "1200px",
//           padding: "20px",
//           position: "relative",
//         }}>
//         <Typography
//           variant="h3"
//           sx={{
//             position: "relative",
//             marginBottom: "20px",
//             fontWeight: "bold",
//             fontFamily: '"Roboto", sans-serif',
//             textAlign: "center",
//             color: "#004d40",
//           }}>
//           Select a Category
//         </Typography>
//         <SearchContainer>
//           <TextField
//             variant="outlined"
//             placeholder="Search categories..."
//             value={search}
//             onChange={handleSearchChange}
//             sx={{ flexGrow: 1, borderRadius: "4px", padding: "10px" }}
//           />
//           <IconButton type="submit" aria-label="search">
//             <SearchIcon />
//           </IconButton>
//         </SearchContainer>
//         <Grid container spacing={3} justifyContent="center">
//           {filteredCategories.map((category) => (
//             <Grid item key={category._id}>
//               <CategoryCard onClick={handleCategoryClick}>
//                 <CardContent
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     textAlign: "center",
//                   }}>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: "bold", color: "#004d40" }}>
//                     {category.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {category.description}
//                   </Typography>
//                 </CardContent>
//               </CategoryCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </AnimatedBox>
//   );
// };

// export default CategoryDisplay;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

// Styled component for the animated background
const AnimatedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  animation: "moveGradient 20s ease infinite",
  background: "linear-gradient(-45deg, #00bcd4, #4caf50, #81c784, #c8e6c9)",
  backgroundSize: "400% 400%",
  "@keyframes moveGradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

// Styled component for the category card
const CategoryCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  height: "200px",
  margin: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
  border: "1px solid #b2dfdb",
  borderRadius: "8px",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
    borderColor: "#4caf50",
  },
}));

// Styled component for the search bar container
const SearchContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-180px",
  right: "-195px",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  border: "1px solid #b2dfdb",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  maxWidth: "400px",
  width: "100%",
}));

const CategoryDisplay = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/customer/categories/${categoryId}`); // Pass the category ID in the URL
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatedBox>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          padding: "20px",
          position: "relative",
        }}>
        <Typography
          variant="h3"
          sx={{
            position: "relative",
            marginBottom: "20px",
            fontWeight: "bold",
            fontFamily: '"Roboto", sans-serif',
            textAlign: "center",
            color: "#004d40",
          }}>
          Select a Category
        </Typography>
        <SearchContainer>
          <TextField
            variant="outlined"
            placeholder="Search categories..."
            value={search}
            onChange={handleSearchChange}
            sx={{ flexGrow: 1, borderRadius: "4px", padding: "10px" }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchContainer>
        <Grid container spacing={3} justifyContent="center">
          {filteredCategories.map((category) => (
            <Grid item key={category._id}>
              <CategoryCard onClick={() => handleCategoryClick(category._id)}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#004d40" }}>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatedBox>
  );
};

export default CategoryDisplay;
