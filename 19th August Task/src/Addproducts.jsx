// import { useState } from "react";
// import axios from "axios";
// function Addproducts(){

//     let [name,setName] = useState("");
//     let [description,setDescription] = useState("");
//     let [data,setData] =useState ([{name : "name", description: "Description"}]);

//     function nameChanged(e){
//         e.preventDefault();
//         setName(e.target.value);
//     }
//     function descriptionChanged(e){
//         e.preventDefault();
//         setDescription(e.target.value);
//     }

//     function Addproducts(){
//         let newdata = {name : name, description: description};
//         axios.post("http://localhost:3000/api/v1/categories",newdata)
//         .then(function(response){
//             console.log(response)
//             setData(response.data);
//             alert("Product is added successfully");
//         })
//         .catch(function (err){
//             console.log(err);
//             alert("server error",err);
//         })
//     }

//     return(
//         <div className="addproducts">
//             <h1>Category Form</h1>
//             <input type="text" value={name} onChange={nameChanged} placeholder="Enter Product Name"></input><br/>
//             <textarea value={description} onChange={descriptionChanged} placeholder="Enter Description of the product" rows="4" cols="50"></textarea><br/>
//             <button id="submit" onClick={Addproducts}>Submit</button> 
//         </div>
//     )
// }

// export default Addproducts;


// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Box, Button, TextField, Typography, CircularProgress, Paper, styled } from "@mui/material";

// // const StyledPaper = styled(Paper)(({ theme }) => ({
// //     padding: theme.spacing(3),
// //     maxWidth: 600,
// //     margin: 'auto',
// //     boxShadow: theme.shadows[5],
// // }));

// // const Addproducts = () => {
// //     const [name, setName] = useState("");
// //     const [description, setDescription] = useState("");
// //     const [loading, setLoading] = useState(false);

// //     const handleNameChange = (e) => {
// //         setName(e.target.value);
// //     };

// //     const handleDescriptionChange = (e) => {
// //         setDescription(e.target.value);
// //     };

// //     const handleSubmit = async () => {
// //         setLoading(true);
// //         const newProduct = { name, description };
// //         try {
// //             await axios.post("http://localhost:3000/api/v1/products", newProduct);
// //             setName("");
// //             setDescription("");
// //             alert("Product added successfully");
// //         } catch (error) {
// //             alert("Error adding product");
// //         }
// //         setLoading(false);
// //     };

// //     return (
// //         <Box p={3}>
// //             <StyledPaper>
// //                 <Typography variant="h4" gutterBottom>Add Product</Typography>
// //                 <TextField
// //                     fullWidth
// //                     label="Product Name"
// //                     variant="outlined"
// //                     value={name}
// //                     onChange={handleNameChange}
// //                     margin="normal"
// //                 />
// //                 <TextField
// //                     fullWidth
// //                     label="Description"
// //                     variant="outlined"
// //                     multiline
// //                     rows={4}
// //                     value={description}
// //                     onChange={handleDescriptionChange}
// //                     margin="normal"
// //                 />
// //                 <Box mt={2} display="flex" justifyContent="flex-end">
// //                     <Button
// //                         variant="contained"
// //                         color="primary"
// //                         onClick={handleSubmit}
// //                         disabled={loading}
// //                     >
// //                         {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
// //                     </Button>
// //                 </Box>
// //             </StyledPaper>
// //         </Box>
// //     );
// // };

// // export default Addproducts;

// // import React from 'react';
// // import axios from 'axios';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';
// // import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

// // const validationSchema = Yup.object({
// //   name: Yup.string()
// //     .required('Product name is required'),
// //   description: Yup.string()
// //     .required('Description is required'),
// // });

// // const Addproducts = () => {
// //   const formik = useFormik({
// //     initialValues: {
// //       name: '',
// //       description: '',
// //     },
// //     validationSchema: validationSchema,
// //     onSubmit: async (values, { setSubmitting }) => {
// //       try {
// //         const response = await axios.post('http://localhost:3000/api/v1/categories', values);
// //         console.log(response);
// //         alert('Product is added successfully');
// //         formik.resetForm();
// //       } catch (error) {
// //         console.error(error);
// //         alert('Server error');
// //       } finally {
// //         setSubmitting(false);
// //       }
// //     },
// //   });

// //   return (
// //     <Box p={3}>
// //       <Typography variant="h4" mb={2}>Add A Product</Typography>
// //       <form onSubmit={formik.handleSubmit}>
// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="Product Name"
// //           name="name"
// //           value={formik.values.name}
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //           error={formik.touched.name && Boolean(formik.errors.name)}
// //           helperText={formik.touched.name && formik.errors.name}
// //           sx={{ mb: 2 }}
// //         />
// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="Description"
// //           name="description"
// //           value={formik.values.description}
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //           error={formik.touched.description && Boolean(formik.errors.description)}
// //           helperText={formik.touched.description && formik.errors.description}
// //           multiline
// //           rows={4}
// //           sx={{ mb: 2 }}
// //         />
// //         <Button
// //           type="submit"
// //           variant="contained"
// //           color="primary"
// //           disabled={formik.isSubmitting}
// //         >
// //           {formik.isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
// //         </Button>
// //       </form>
// //     </Box>
// //   );
// // };

// // export default Addproducts;


// import React from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, TextField, Button, Typography, CircularProgress, Grid, Paper, styled } from '@mui/material';

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('Product name is required'),
//   description: Yup.string()
//     .required('Description is required'),
// });

// const FormContainer = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   maxWidth: 600,
//   margin: '0 auto',
// }));

// const Addproducts = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       description: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         const response = await axios.post('http://localhost:3000/api/v1/products', values);
//         console.log(response);
//         alert('Product is added successfully');
//         formik.resetForm();
//       } catch (error) {
//         console.error(error);
//         alert('Server error');
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <Box p={3}>
//       <FormContainer elevation={3}>
//         <Typography variant="h4" gutterBottom>
//           Add A Product
//         </Typography>
//         <form onSubmit={formik.handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Product Name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.name && Boolean(formik.errors.name)}
//                 helperText={formik.touched.name && formik.errors.name}
//                 size="small"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Description"
//                 name="description"
//                 value={formik.values.description}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.description && Boolean(formik.errors.description)}
//                 helperText={formik.touched.description && formik.errors.description}
//                 multiline
//                 rows={4}
//                 size="small"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 disabled={formik.isSubmitting}
//               >
//                 {formik.isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </FormContainer>
//     </Box>
//   );
// };

// export default Addproducts;


// import React from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, CircularProgress, styled } from '@mui/material';

// const validationSchema = Yup.object({
//   code: Yup.string().required('Code is required'),
//   name: Yup.string().required('Name is required'),
//   excerpt: Yup.string().required('Excerpt is required'),
//   description: Yup.string().required('Description is required'),
//   price: Yup.number().required('Price is required').positive('Price must be positive'),
//   category: Yup.string().nullable(), // Category can be null or left blank
// });

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// const AddProducts = () => {
//   const formik = useFormik({
//     initialValues: {
//       code: '',
//       name: '',
//       excerpt: '',
//       description: '',
//       price: '',
//       category: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         await axios.post('http://localhost:3000/api/v1/products', values);
//         alert('Product added successfully');
//         formik.resetForm();
//       } catch (error) {
//         console.error(error);
//         alert('Error adding product');
//       }
//       setSubmitting(false);
//     },
//   });

//   return (
//     <Box p={3} maxWidth={600} mx="auto">
//       <Typography variant="h4" gutterBottom>
//         Add New Product
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         <StyledTextField
//           fullWidth
//           id="code"
//           name="code"
//           label="Product Code"
//           value={formik.values.code}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.code && Boolean(formik.errors.code)}
//           helperText={formik.touched.code && formik.errors.code}
//         />
//         <StyledTextField
//           fullWidth
//           id="name"
//           name="name"
//           label="Product Name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//         />
//         <StyledTextField
//           fullWidth
//           id="excerpt"
//           name="excerpt"
//           label="Excerpt"
//           value={formik.values.excerpt}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.excerpt && Boolean(formik.errors.excerpt)}
//           helperText={formik.touched.excerpt && formik.errors.excerpt}
//         />
//         <StyledTextField
//           fullWidth
//           id="description"
//           name="description"
//           label="Description"
//           multiline
//           rows={4}
//           value={formik.values.description}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.description && Boolean(formik.errors.description)}
//           helperText={formik.touched.description && formik.errors.description}
//         />
//         <StyledTextField
//           fullWidth
//           id="price"
//           name="price"
//           label="Price"
//           type="number"
//           value={formik.values.price}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.price && Boolean(formik.errors.price)}
//           helperText={formik.touched.price && formik.errors.price}
//         />
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel id="category-label">Category (Optional)</InputLabel>
//           <Select
//             labelId="category-label"
//             id="category"
//             name="category"
//             value={formik.values.category}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             label="Category (Optional)"
//             error={formik.touched.category && Boolean(formik.errors.category)}
//           >
//             <MenuItem value="">None</MenuItem>
//             {/* Add more categories as needed */}
//             <MenuItem value="category1">Category 1</MenuItem>
//             <MenuItem value="category2">Category 2</MenuItem>
//           </Select>
//         </FormControl>
//         <Box mt={2}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={formik.isSubmitting}
//             startIcon={formik.isSubmitting ? <CircularProgress size={24} /> : null}
//           >
//             {formik.isSubmitting ? 'Submitting...' : 'Submit'}
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AddProducts;


// import React from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, CircularProgress, styled, Checkbox, FormControlLabel } from '@mui/material';

// const validationSchema = Yup.object({
//   code: Yup.string().required('Code is required'),
//   name: Yup.string().required('Name is required'),
//   excerpt: Yup.string().required('Excerpt is required'),
//   description: Yup.string().required('Description is required'),
//   price: Yup.number().required('Price is required').positive('Price must be positive'),
//   category: Yup.string().nullable(), // Category can be null or left blank
// });

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// const AddProductForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       code: '',
//       name: '',
//       excerpt: '',
//       description: '',
//       price: '',
//       category: '',
//       status: true, // Default status to true (active)
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         await axios.post('http://localhost:3000/api/v1/products', values);
//         alert('Product added successfully');
//         formik.resetForm();
//       } catch (error) {
//         console.error(error);
//         alert('Error adding product');
//       }
//       setSubmitting(false);
//     },
//   });

//   return (
//     <Box p={3} maxWidth={600} mx="auto">
//       <Typography variant="h4" gutterBottom>
//         Add New Product
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         <StyledTextField
//           fullWidth
//           id="code"
//           name="code"
//           label="Product Code"
//           value={formik.values.code}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.code && Boolean(formik.errors.code)}
//           helperText={formik.touched.code && formik.errors.code}
//         />
//         <StyledTextField
//           fullWidth
//           id="name"
//           name="name"
//           label="Product Name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//         />
//         <StyledTextField
//           fullWidth
//           id="excerpt"
//           name="excerpt"
//           label="Excerpt"
//           value={formik.values.excerpt}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.excerpt && Boolean(formik.errors.excerpt)}
//           helperText={formik.touched.excerpt && formik.errors.excerpt}
//         />
//         <StyledTextField
//           fullWidth
//           id="description"
//           name="description"
//           label="Description"
//           multiline
//           rows={4}
//           value={formik.values.description}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.description && Boolean(formik.errors.description)}
//           helperText={formik.touched.description && formik.errors.description}
//         />
//         <StyledTextField
//           fullWidth
//           id="price"
//           name="price"
//           label="Price"
//           type="number"
//           value={formik.values.price}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.price && Boolean(formik.errors.price)}
//           helperText={formik.touched.price && formik.errors.price}
//         />
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel id="category-label">Category (Optional)</InputLabel>
//           <Select
//             labelId="category-label"
//             id="category"
//             name="category"
//             value={formik.values.category}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             label="Category (Optional)"
//             error={formik.touched.category && Boolean(formik.errors.category)}
//           >
//             <MenuItem value="">None</MenuItem>
//             {/* Add more categories as needed */}
//             <MenuItem value="category1">Category 1</MenuItem>
//             <MenuItem value="category2">Category 2</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControlLabel
//           control={
//             <Checkbox
//               id="status"
//               name="status"
//               checked={formik.values.status}
//               onChange={formik.handleChange}
//             />
//           }
//           label="Active"
//         />
//         <Box mt={2}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={formik.isSubmitting}
//             startIcon={formik.isSubmitting ? <CircularProgress size={24} /> : null}
//           >
//             {formik.isSubmitting ? 'Submitting...' : 'Submit'}
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AddProductForm;


// import React from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, CircularProgress, styled, Checkbox, FormControlLabel } from '@mui/material';

// const validationSchema = Yup.object({
//   code: Yup.string().required('Code is required'),
//   name: Yup.string().required('Name is required'),
//   excerpt: Yup.string().required('Excerpt is required'),
//   description: Yup.string().required('Description is required'),
//   price: Yup.number().required('Price is required').positive('Price must be positive'),
//   stock: Yup.number().required('Stock is required').integer('Stock must be an integer').positive('Stock must be positive'),
//   category: Yup.string().nullable(), // Category can be null or left blank
// });

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// const AddProductForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       code: '',
//       name: '',
//       excerpt: '',
//       description: '',
//       price: '',
//       stock: '',
//       category: '',
//       status: true, // Default status to true (active)
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         await axios.post('http://localhost:3000/api/v1/products', values);
//         alert('Product added successfully');
//         formik.resetForm();
//       } catch (error) {
//         console.error(error);
//         alert('Error adding product');
//       }
//       setSubmitting(false);
//     },
//   });

//   return (
//     <Box p={3} maxWidth={600} mx="auto">
//       <Typography variant="h4" gutterBottom>
//         Add New Product
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         <StyledTextField
//           fullWidth
//           id="code"
//           name="code"
//           label="Product Code"
//           value={formik.values.code}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.code && Boolean(formik.errors.code)}
//           helperText={formik.touched.code && formik.errors.code}
//         />
//         <StyledTextField
//           fullWidth
//           id="name"
//           name="name"
//           label="Product Name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//         />
//         <StyledTextField
//           fullWidth
//           id="excerpt"
//           name="excerpt"
//           label="Excerpt"
//           value={formik.values.excerpt}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.excerpt && Boolean(formik.errors.excerpt)}
//           helperText={formik.touched.excerpt && formik.errors.excerpt}
//         />
//         <StyledTextField
//           fullWidth
//           id="description"
//           name="description"
//           label="Description"
//           multiline
//           rows={4}
//           value={formik.values.description}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.description && Boolean(formik.errors.description)}
//           helperText={formik.touched.description && formik.errors.description}
//         />
//         <StyledTextField
//           fullWidth
//           id="price"
//           name="price"
//           label="Price"
//           type="number"
//           value={formik.values.price}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.price && Boolean(formik.errors.price)}
//           helperText={formik.touched.price && formik.errors.price}
//         />
//         <StyledTextField
//           fullWidth
//           id="stock"
//           name="stock"
//           label="Stock"
//           type="number"
//           value={formik.values.stock}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.stock && Boolean(formik.errors.stock)}
//           helperText={formik.touched.stock && formik.errors.stock}
//         />
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel id="category-label">Category (Optional)</InputLabel>
//           <Select
//             labelId="category-label"
//             id="category"
//             name="category"
//             value={formik.values.category}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             label="Category (Optional)"
//             error={formik.touched.category && Boolean(formik.errors.category)}
//           >
//             <MenuItem value="">None</MenuItem>
//             <MenuItem value="category1">Category 1</MenuItem>
//             <MenuItem value="category2">Category 2</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControlLabel
//           control={
//             <Checkbox
//               id="status"
//               name="status"
//               checked={formik.values.status}
//               onChange={formik.handleChange}
//             />
//           }
//           label="Active"
//         />
//         <Box mt={2}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={formik.isSubmitting}
//             startIcon={formik.isSubmitting ? <CircularProgress size={24} /> : null}
//           >
//             {formik.isSubmitting ? 'Submitting...' : 'Submit'}
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AddProductForm;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; 

// function Addproducts() {
//   let [categories, setCategories] = useState([]);
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/v1/categories")
//       .then((response) => {
//         setCategories(response.data.categories);
//       })
//       .catch((error) => {
//         alert("Server is not responding. Please try again later.");
//         console.error(error);
//       });
//   }, []);

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Product name is required"),
//     code: Yup.string().required("Product code is required"),
//     excerpt: Yup.string().required("Product description is required"),
//     category: Yup.string().required("Category is required"),
//     price: Yup.number()
//       .required("Price is required")
//       .positive("Price must be a positive number")
//       .min(0, "Price cannot be negative"),
//     stock: Yup.number()
//       .required("Stock is required")
//       .integer("Stock must be an integer")
//       .min(0, "Stock cannot be negative"),
//   });

 
//   const generateCode = () => {
//     const uuid = uuidv4(); 
//     const code = uuid.slice(0, 6); 
//     return code;
//   };

//   return (
//     <div className="addproducts">
//       <h2>Add Products</h2>
//       <Formik
//         initialValues={{name: "", code: "", excerpt: "", category: "", price: 0, stock: 0,}}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           axios
//             .post("http://localhost:3000/api/v1/products", values)
//             .then((response) => {
//               console.log(response);
//               navigate('/ShowProducts');
//               resetForm();
//             })
//             .catch((err) => {
//               console.log(err);
//             })
//             .finally(() => {
//               setSubmitting(false);
//             });
//         }}
//       >
//         {({ isSubmitting, setFieldValue }) => (
//           <Form>
//             <div>
//               <Field type="text" name="name" placeholder="Enter Product Name"/>
//               <ErrorMessage name="name" component="div" />
//             </div>
//             <div>
//               <Field type="text" name="code" style={{'display':"inline"}} placeholder="Enter Product Code"/>
//               <button type="button" onClick={() => setFieldValue("code", generateCode())}>
//                 Generate Unique Code
//               </button>
//               <ErrorMessage name="code" component="div" />
//             </div>
//             <div>
//               <Field type="text" name="excerpt" placeholder="Enter Description of the product"/>
//               <ErrorMessage name="excerpt" component="div" />
//             </div>
//             <div>
//               <Field as="select" name="category">
//                 <option value="" disabled>
//                   Select a category
//                 </option>
//                 {categories.map((cat) => (
//                   <option key={cat.id} value={cat._id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </Field>
//               <ErrorMessage name="category" component="div" />
//             </div>
//             <div>
//               <Field type="number" name="price" placeholder="Enter the price of your product"/>
//               <ErrorMessage name="price" component="div" />
//             </div>
//             <div>
//               <Field type="number" name="stock" placeholder="Enter the stock quantity"/>
//               <ErrorMessage name="stock" component="div" />
//             </div>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default Addproducts;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; 
// import { Box, Button, TextField, MenuItem, CircularProgress, Typography, InputLabel, FormControl, Select, FormHelperText } from '@mui/material';
// import { styled } from '@mui/material/styles';

// // Custom Styled Components
// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
// }));

// const StyledFormControl = styled(FormControl)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   width: '100%',
// }));

// const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
//   marginTop: theme.spacing(1),
// }));

// function Addproducts() {
//   let [categories, setCategories] = useState([]);
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/v1/categories")
//       .then((response) => {
//         setCategories(response.data.categories);
//       })
//       .catch((error) => {
//         alert("Server is not responding. Please try again later.");
//         console.error(error);
//       });
//   }, []);

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Product name is required"),
//     code: Yup.string().required("Product code is required"),
//     excerpt: Yup.string().required("Product description is required"),
//     category: Yup.string().required("Category is required"),
//     price: Yup.number()
//       .required("Price is required")
//       .positive("Price must be a positive number")
//       .min(0, "Price cannot be negative"),
//     stock: Yup.number()
//       .required("Stock is required")
//       .integer("Stock must be an integer")
//       .min(0, "Stock cannot be negative"),
//   });

//   const generateCode = () => {
//     const uuid = uuidv4();
//     const code = uuid.slice(0, 6);
//     return code;
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={2}>Add Product</Typography>
//       <Formik
//         initialValues={{ name: "", code: "", excerpt: "", category: "", price: 0, stock: 0 }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           axios
//             .post("http://localhost:3000/api/v1/products", values)
//             .then((response) => {
//               navigate('/ShowProducts');
//               resetForm();
//             })
//             .catch((err) => {
//               console.error(err);
//               alert("Error adding product");
//             })
//             .finally(() => {
//               setSubmitting(false);
//             });
//         }}
//       >
//         {({ isSubmitting, setFieldValue }) => (
//           <Form>
//             <StyledTextField
//               fullWidth
//               name="name"
//               label="Product Name"
//               variant="outlined"
//               placeholder="Enter Product Name"
//               helperText={<ErrorMessage name="name" />}
//               error={Boolean(<ErrorMessage name="name" />)}
//             />
//             <StyledTextField
//               fullWidth
//               name="code"
//               label="Product Code"
//               variant="outlined"
//               placeholder="Enter Product Code"
//               helperText={<ErrorMessage name="code" />}
//               error={Boolean(<ErrorMessage name="code" />)}
//               InputProps={{
//                 endAdornment: (
//                   <Button
//                     variant="outlined"
//                     onClick={() => setFieldValue("code", generateCode())}
//                   >
//                     Generate Code
//                   </Button>
//                 ),
//               }}
//             />
//             <StyledTextField
//               fullWidth
//               name="excerpt"
//               label="Product Description"
//               variant="outlined"
//               placeholder="Enter Description of the Product"
//               multiline
//               rows={4}
//               helperText={<ErrorMessage name="excerpt" />}
//               error={Boolean(<ErrorMessage name="excerpt" />)}
//             />
//             <StyledFormControl>
//               <InputLabel>Category</InputLabel>
//               <Field as={Select} name="category" label="Category">
//                 <MenuItem value="" disabled>Select a category</MenuItem>
//                 {categories.map((cat) => (
//                   <MenuItem key={cat._id} value={cat._id}>
//                     {cat.name}
//                   </MenuItem>
//                 ))}
//               </Field>
//               <StyledFormHelperText>
//                 <ErrorMessage name="category" />
//               </StyledFormHelperText>
//             </StyledFormControl>
//             <StyledTextField
//               fullWidth
//               name="price"
//               label="Price"
//               type="number"
//               variant="outlined"
//               placeholder="Enter the Price of the Product"
//               helperText={<ErrorMessage name="price" />}
//               error={Boolean(<ErrorMessage name="price" />)}
//             />
//             <StyledTextField
//               fullWidth
//               name="stock"
//               label="Stock"
//               type="number"
//               variant="outlined"
//               placeholder="Enter the Stock Quantity"
//               helperText={<ErrorMessage name="stock" />}
//               error={Boolean(<ErrorMessage name="stock" />)}
//             />
//             <StyledButton
//               variant="contained"
//               color="primary"
//               type="submit"
//               disabled={isSubmitting}
//               fullWidth
//             >
//               {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
//             </StyledButton>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// }

// export default Addproducts;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { Box, Button, MenuItem, TextField, Typography, CircularProgress, styled } from "@mui/material";

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: theme.palette.grey[400],
//     },
//     '&:hover fieldset': {
//       borderColor: theme.palette.primary.main,
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginRight: theme.spacing(2),
// }));

// const validationSchema = Yup.object({
//   name: Yup.string().required("Product name is required"),
//   code: Yup.string().required("Product code is required"),
//   excerpt: Yup.string().required("Product description is required"),
//   category: Yup.string().nullable(),
//   price: Yup.number()
//     .required("Price is required")
//     .positive("Price must be a positive number")
//     .min(0, "Price cannot be negative"),
//   stock: Yup.number()
//     .required("Stock is required")
//     .integer("Stock must be an integer")
//     .min(0, "Stock cannot be negative"),
// });

// const generateCode = () => {
//   const uuid = uuidv4();
//   return uuid.slice(0, 6);
// };

// const Addproducts = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/v1/categories")
//       .then((response) => {
//         setCategories(response.data.categories);
//         setLoading(false);
//       })
//       .catch((error) => {
//         alert("Server is not responding. Please try again later.");
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Box p={3} maxWidth="600px" mx="auto">
//       <Typography variant="h4" gutterBottom>Add Products</Typography>
//       {loading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Formik
//           initialValues={{
//             name: "",
//             code: "",
//             excerpt: "",
//             category: "",
//             price: 0,
//             stock: 0,
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values, { setSubmitting, resetForm }) => {
//             axios
//               .post("http://localhost:3000/api/v1/products", values)
//               .then((response) => {
//                 console.log(response);
//                 navigate('/products');
//                 resetForm();
//               })
//               .catch((err) => {
//                 console.log(err);
//                 alert("Error adding product. Please try again.");
//               })
//               .finally(() => {
//                 setSubmitting(false);
//               });
//           }}
//         >
//           {({ isSubmitting, setFieldValue }) => (
//             <Form>
//               <Box mb={2}>
//                 <Field
//                   as={StyledTextField}
//                   fullWidth
//                   label="Product Name"
//                   variant="outlined"
//                   name="name"
//                 />
//                 <ErrorMessage name="name" component="div" />
//               </Box>
//               <Box mb={2} display="flex" alignItems="center">
//                 <Field
//                   as={StyledTextField}
//                   fullWidth
//                   label="Product Code"
//                   variant="outlined"
//                   name="code"
//                 />
//                 <StyledButton
//                   variant="contained"
//                   onClick={() => setFieldValue("code", generateCode())}
//                 >
//                   Generate Code
//                 </StyledButton>
//                 <ErrorMessage name="code" component="div" />
//               </Box>
//               <Box mb={2}>
//                 <Field
//                   as={StyledTextField}
//                   fullWidth
//                   label="Description"
//                   variant="outlined"
//                   name="excerpt"
//                   multiline
//                   rows={4}
//                 />
//                 <ErrorMessage name="excerpt" component="div" />
//               </Box>
//               <Box mb={2}>
//                 <Field
//                   as={StyledTextField}
//                   select
//                   fullWidth
//                   label="Category"
//                   name="category"
//                 >
//                   <MenuItem value="" disabled>
//                     Select a category
//                   </MenuItem>
//                   {categories.map((cat) => (
//                     <MenuItem key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </MenuItem>
//                   ))}
//                 </Field>
//                 <ErrorMessage name="category" component="div" />
//               </Box>
//               <Box mb={2}>
//                 <Field
//                   as={StyledTextField}
//                   fullWidth
//                   label="Price"
//                   variant="outlined"
//                   type="number"
//                   name="price"
//                 />
//                 <ErrorMessage name="price" component="div" />
//               </Box>
//               <Box mb={2}>
//                 <Field
//                   as={StyledTextField}
//                   fullWidth
//                   label="Stock"
//                   variant="outlined"
//                   type="number"
//                   name="stock"
//                 />
//                 <ErrorMessage name="stock" component="div" />
//               </Box>
//               <StyledButton
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={isSubmitting}
//               >
//                 Submit
//               </StyledButton>
//             </Form>
//           )}
//         </Formik>
//       )}
//     </Box>
//   );
// };

// export default Addproducts;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, MenuItem, TextField, Typography, CircularProgress, styled } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.grey[400],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

const GenerateCodeButton = styled(StyledButton)(({ theme }) => ({
  marginTop: theme.spacing(1), // Adjust this value to shift the button up or down
  marginLeft: theme.spacing(2),
}));

const validationSchema = Yup.object({
  name: Yup.string().required("Product name is required"),
  code: Yup.string().required("Product code is required"),
  excerpt: Yup.string().required("Product description is required"),
  category: Yup.string().nullable(),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .min(0, "Price cannot be negative"),
  stock: Yup.number()
    .required("Stock is required")
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative"),
});

const generateCode = () => {
  const uuid = uuidv4();
  return uuid.slice(0, 6);
};

const Addproducts = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/categories")
      .then((response) => {
        setCategories(response.data.categories);
        setLoading(false);
      })
      .catch((error) => {
        alert("Server is not responding. Please try again later.");
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={3} maxWidth="600px" mx="auto">
      <Typography variant="h4" gutterBottom>Add Products</Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress />
        </Box>
      ) : (
        <Formik
          initialValues={{
            name: "",
            code: "",
            excerpt: "",
            category: "",
            price: 0,
            stock: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            axios
              .post("http://localhost:3000/api/v1/products", values)
              .then((response) => {
                console.log(response);
                navigate('/products');
                resetForm();
              })
              .catch((err) => {
                console.log(err);
                alert("Error adding product. Please try again.");
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={StyledTextField}
                  fullWidth
                  label="Product Name"
                  variant="outlined"
                  name="name"
                />
                <ErrorMessage name="name" component="div" />
              </Box>
              <Box mb={2} display="flex" alignItems="center">
                <Field
                  as={StyledTextField}
                  fullWidth
                  label="Product Code"
                  variant="outlined"
                  name="code"
                />
                <GenerateCodeButton textAlign='center'
                  variant="contained"
                  onClick={() => setFieldValue("code", generateCode())}
                >Generate Code
                </GenerateCodeButton>
                <ErrorMessage name="code" component="div" />
              </Box>
              <Box mb={2}>
                <Field
                  as={StyledTextField}
                  fullWidth
                  label="Description"
                  variant="outlined"
                  name="excerpt"
                  multiline
                  rows={4}
                />
                <ErrorMessage name="excerpt" component="div" />
              </Box>
              <Box mb={2}>
                <Field
                  as={StyledTextField}
                  select
                  fullWidth
                  label="Category"
                  name="category"
                >
                  <MenuItem value="" disabled>
                    Select a category
                  </MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat._id} value={cat._id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage name="category" component="div" />
              </Box>
              <Box mb={2}>
                <Field
                  as={StyledTextField}
                  fullWidth
                  label="Price"
                  variant="outlined"
                  type="number"
                  name="price"
                />
                <ErrorMessage name="price" component="div" />
              </Box>
              <Box mb={2}>
                <Field
                  as={StyledTextField}
                  fullWidth
                  label="Stock"
                  variant="outlined"
                  type="number"
                  name="stock"
                />
                <ErrorMessage name="stock" component="div" />
              </Box>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </StyledButton>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

export default Addproducts;
