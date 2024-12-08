// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Addproducts from './Addproducts';

// function ShowProducts() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     function displayProducts() {
//         const url = "http://localhost:3000/api/v1/products";
//         axios.get(url)
//             .then(function (response) {
//                 console.log(response.data);
//                 setData(response.data.categories);
//             })
//             .catch(function (error) {
//                 alert("Server is not responding");
//             });
//     }

//     // function viewProductDetails(Id) {
//     //     navigate(`/categories/${Id}`);
//     // }

//     function DeleteProducts(index){
//         console.log(index);
//         axios
//             .delete(`http://localhost:3000/api/v1/categories/${index}`)
//             .then(function(response)
//             {
//                 console.log(response);
//                 displayProducts();
//             })
//             .catch(function(error)
//             {
//                 console.log(error);
//             });
//         let newIds = data.filter(function (i)
//         {
//             if(index == i)
//             {
//                 return false;
//             }
//             else
//             {
//                 return true;
//             }
//         });
//     setData(newIds);
//     }

//     const handleButtonClick = () => {
//         navigate('/admin/category');
//     }

//     return (
//         <div className='outer'>
//             <h1>Get Product Details</h1><br/>
//             <button onClick={displayProducts}>Show Products</button><br/><br/>
//             <button onClick={handleButtonClick}>Add Categories</button>
//             <div className='inner'>
//                 {
//                 data.map(function (value) {
//                     return (
//                         <div className='inside' key={value._id}>
//                             <p><b>Name:</b> {value.name}</p>
//                             <p><b>Description:</b> {value.description}</p>
//                             {/* <button onClick={() => viewProductDetails(value._id)}>View Details</button> */}
//                             <button onClick={() => DeleteProducts(value._id)}>Delete</button> 
                            
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default ShowProducts;

// import axios from 'axios';
// import { useState } from 'react';
// import { Outlet, useNavigate, Link } from 'react-router-dom';
// import ProductDetails from './ProductDetails';

// function ShowProducts() {
//     const [data, setData] = useState([]);
//     const [id,setID]=useState("");
//     const navigate = useNavigate();

//     function displayProducts() {
//         const url = "http://localhost:3000/api/v1/products";
//         axios.get(url)
//         .then(function (response) {
//             setData(response.data.products);
//             setID(response.data.products._id);
//         })
//         .catch(function (error) {
//             alert("Server is not responding",error);
//         });
//     }   

// function viewProductDetails(productId) {
    
//     navigate(`/products/${productId}`);
// }

// return (
//     <div className='outer'>
//         <h1>Get Product Details</h1>
//         <button onClick={displayProducts}>Show Products</button><br/><br/>
//         <div className='inner'>
//         {
//             data.map(function (value) {
//             return (
//                 <div className='inside' key={value._id}>
//                     <p><b>Name:</b> {value.name}</p>
//                     <p><b>Price:</b> {value.price}</p>
//                     <Link to={value}>Go to {value}</Link>
//                 </div>
//             );
//             })
//         }
//         </div>
//     </div>
// );
// }

// export default ShowProducts;

// import axios from 'axios';
// import { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import "./products.css";

// function ShowProducts() {
//     const [data, setData] = useState([]);

//     function displayProducts() {
//         const url = "http://localhost:3000/api/v1/products";
//         axios.get(url)
//             .then(function (response) {
//                 setData(response.data.products);
//             })
//             .catch(function (error) {
//                 alert("Server is not responding", error);
//             });
//         return data;
//     }

//     return (
//         <div className='outer'>
//             <h1>Get Product Details</h1>
//             <button onClick={displayProducts}>Show Products</button><br/><br/>
//             <div className='inner'>
//                 {data.map(function (value) {
//                     return (
//                         <div className='inside' key={value._id}>
//                             <p><b>Name:</b> {value.name}</p>
//                             <p><b>Price:</b> {value.price}</p>
//                             <div id='link'>
//                             <Link to={`/products/${value._id}`} style={{ textDecoration: 'none' }} >View Details</Link><br/>
//                             </div>
//                         </div>
//                     );
//                 })}   
//             </div>
//             <Outlet/><br/>
//         </div>
//     );
// }

// export default ShowProducts;


// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import axios from 'axios';
// import {
//   Button,
//   CircularProgress,
//   TextField,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Paper,
//   Typography,
//   Tooltip
// } from '@mui/material';
// import { Visibility as VisibilityIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import moment from 'moment-timezone';

// // Lazy load DataTable component
// const DataTable = lazy(() => import('react-data-table-component'));

// function ShowProducts() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/v1/products');
//       setData(response.data.products);
//     } catch (error) {
//       alert('Server is not responding');
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setPage(0); // Reset to first page on search
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); // Reset to first page on rows per page change
//   };

//   const filteredData = data.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const formatDate = (date) => {
//     return moment(date).tz('Asia/Kolkata').format('Do MMMM YYYY');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Get Product Details
//       </Typography>
      
//       <TextField
//         label="Search Products"
//         variant="outlined"
//         fullWidth
//         value={searchTerm}
//         onChange={handleSearchChange}
//         margin="normal"
//         size="small"
//         InputProps={{
//           endAdornment: (
//             <Tooltip title="Search">
//               <IconButton>
//                 <SearchIcon />
//               </IconButton>
//             </Tooltip>
//           )
//         }}
//       />

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={fetchProducts}
//         style={{ marginBottom: '20px' }}
//       >
//         Fetch Products
//       </Button>

//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <Suspense fallback={<CircularProgress />}>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Product Name</TableCell>
//                   <TableCell>Price</TableCell>
//                   <TableCell>Created At</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredData
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((product) => (
//                     <TableRow key={product._id}>
//                       <TableCell>{product.name}</TableCell>
//                       <TableCell>${product.price}</TableCell>
//                       <TableCell>{formatDate(product.createdAt)}</TableCell>
//                       <TableCell>
//                         <Tooltip title="View Details">
//                           <IconButton component={Link} to={`/products/${product._id}`}>
//                             <VisibilityIcon />
//                           </IconButton>
//                         </Tooltip>
//                         <Tooltip title="Delete">
//                           <IconButton
//                             color="error"
//                             onClick={() => {
//                               // Handle delete
//                               axios.delete(`http://localhost:3000/api/v1/products/${product._id}`)
//                                 .then(() => fetchProducts())
//                                 .catch(error => console.error('Error deleting product:', error));
//                             }}
//                           >
//                             <DeleteIcon />
//                           </IconButton>
//                         </Tooltip>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25]}
//               component="div"
//               count={filteredData.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </TableContainer>
//         </Suspense>
//       )}
//     </div>
//   );
// }

// export default ShowProducts;


// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import axios from 'axios';
// import {
//   Button,
//   CircularProgress,
//   TextField,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Paper,
//   Typography,
//   Tooltip
// } from '@mui/material';
// import { Visibility as VisibilityIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import moment from 'moment-timezone';

// // Lazy load the Admin component
// const Admin = lazy(() => import('./AdminPage'));

// function ShowProducts() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const results = data.filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(results);
//   }, [searchTerm, data]);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/v1/products');
//       setData(response.data.products);
//     } catch (error) {
//       alert('Server is not responding');
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setPage(0);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); 
//   };

//   const formatDate = (date) => {
//     return moment(date).tz('Asia/Kolkata').format('Do MMMM YYYY');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Get Product Details
//       </Typography>

//       <TextField
//         label="Search Products"
//         variant="outlined"
//         fullWidth
//         value={searchTerm}
//         onChange={handleSearchChange}
//         margin="normal"
//         size="small"
//         InputProps={{
//           endAdornment: (
//             <Tooltip title="Search">
//               <IconButton>
//                 <SearchIcon />
//               </IconButton>
//             </Tooltip>
//           )
//         }}
//       />

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={fetchProducts}
//         style={{ marginBottom: '20px' }}
//       >
//         Fetch Products
//       </Button>

//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Product Name</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>Created At</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredData
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((product) => (
//                   <TableRow key={product._id}>
//                     <TableCell>{product.name}</TableCell>
//                     <TableCell>${product.price}</TableCell>
//                     <TableCell>{formatDate(product.createdAt)}</TableCell>
//                     <TableCell>
//                       <Tooltip title="View Details">
//                         <IconButton component={Link} to={`/products/${product._id}`}>
//                           <VisibilityIcon />
//                         </IconButton>
//                       </Tooltip>
//                       <Tooltip title="Delete">
//                         <IconButton
//                           color="error"
//                           onClick={() => {
//                             axios.delete(`http://localhost:3000/api/v1/products/${product._id}`)
//                               .then(() => fetchProducts())
//                               .catch(error => console.error('Error deleting product:', error));
//                           }}
//                         >
//                           <DeleteIcon />
//                         </IconButton>
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={filteredData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//       <Suspense fallback={<CircularProgress />}>
//         <Admin />
//       </Suspense>
//     </div>
//   );
// }

// export default ShowProducts;


// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import {
//   Button,
//   CircularProgress,
//   TextField,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Paper,
//   Typography,
//   Tooltip,
//   Grid,
//   Box
// } from '@mui/material';
// import { Visibility as VisibilityIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
// import moment from 'moment-timezone';

// const Admin = lazy(() => import('./AdminPage'));

// function ShowProducts() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const results = data.filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(results);
//   }, [searchTerm, data]);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/v1/products');
//       setData(response.data.products);
//     } catch (error) {
//       alert('Server is not responding');
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setPage(0); 
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); 
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/v1/products/${productId}`);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const formatDate = (date) => {
//     return moment(date).tz('Asia/Kolkata').format('Do MMMM YYYY');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Product Details
//       </Typography>

//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={8}>
//           <TextField
//             label="Search Products"
//             variant="outlined"
//             fullWidth
//             value={searchTerm}
//             onChange={handleSearchChange}
//             margin="normal"
//             size="small"
//             InputProps={{
//               endAdornment: (
//                 <Tooltip title="Search">
//                   <IconButton>
//                     <SearchIcon />
//                   </IconButton>
//                 </Tooltip>
//               )
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={4} container justifyContent="flex-end">
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={fetchProducts}
//             style={{ marginBottom: '20px' }}
//           >
//             Fetch Products
//           </Button>
//         </Grid>
//       </Grid>

//       {loading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//           <CircularProgress />
//         </Box>
//       ) : (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Product Name</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>Created At</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredData
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((product) => (
//                   <TableRow key={product._id}>
//                     <TableCell>{product.name}</TableCell>
//                     <TableCell>${product.price}</TableCell>
//                     <TableCell>{formatDate(product.createdAt)}</TableCell>
//                     <TableCell>
//                       <Tooltip title="View Details">
//                         <IconButton component={Link} to={`/products/${product._id}`}>
//                           <VisibilityIcon />
//                         </IconButton>
//                       </Tooltip>
//                       <Tooltip title="Delete">
//                         <IconButton
//                           color="error"
//                           onClick={() => handleDelete(product._id)}
//                         >
//                           <DeleteIcon />
//                         </IconButton>
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={filteredData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//       <Suspense fallback={<CircularProgress />}>
//         <Admin />
//       </Suspense>
//     </div>
//   );
// }

// export default ShowProducts;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, TextField, IconButton, CircularProgress } from '@mui/material';
// import { Search as SearchIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en-gb'; // Import locale for date formatting

// const ShowProducts = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [pageSize, setPageSize] = useState(5);
//     const [rowsPerPage, setRowsPerPage] = useState(10);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v1/products');
//                 setData(response.data.products.map(item => ({
//                     ...item,
//                     createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
//                 })));
//             } catch (error) {
//                 alert('Server is not responding');
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             setData(data.filter(item => item._id !== id));
//         } catch (error) {
//             alert('Error deleting product');
//         }
//     };

//     const columns = [
//         { field: '_id', headerName: 'ID', width: 150 },
//         { field: 'name', headerName: 'Name', width: 200 },
//         { field: 'price', headerName: 'Price', width: 150 },
//         { field: 'createdAt', headerName: 'Created At', width: 200 },
//         {
//             field: 'actions',
//             headerName: 'Actions',
//             width: 150,
//             renderCell: (params) => (
//                 <Box>
//                     <IconButton onClick={() => handleDelete(params.row._id)} color="error">
//                         <DeleteIcon />
//                     </IconButton>
//                     <Link to={`/products/${params.row._id}`} style={{ textDecoration: 'none' }}>
//                         <Button variant="outlined" color="primary">View Details</Button>
//                     </Link>
//                 </Box>
//             )
//         }
//     ];

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <Box p={3}>
//             <Box mb={2} display="flex" alignItems="center">
//                 <TextField
//                     label="Search"
//                     variant="outlined"
//                     size="small"
//                     value={search}
//                     onChange={handleSearch}
//                     InputProps={{
//                         endAdornment: (
//                             <IconButton>
//                                 <SearchIcon />
//                             </IconButton>
//                         ),
//                     }}
//                     sx={{ mr: 2 }}
//                 />
//                 <Button variant="contained" color="primary" onClick={() => window.location.href = '/addproducts'}>
//                     Add Product
//                 </Button>
//             </Box>
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <DataGrid
//                     rows={filteredData}
//                     columns={columns}
//                     pageSize={pageSize}
//                     rowsPerPageOptions={[5, 10, 20]}
//                     pagination
//                     paginationMode="client"
//                     onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//                     sx={{ height: '60vh' }}
//                 />
//             )}
//         </Box>
//     );
// };

// export default ShowProducts;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, TextField, IconButton, CircularProgress } from '@mui/material';
// import { Search as SearchIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en-gb'; // Import locale for date formatting

// const ShowProducts = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [pageSize, setPageSize] = useState(5);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v1/products');
//                 setData(response.data.products.map(item => ({
//                     ...item,
//                     createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
//                 })));
//             } catch (error) {
//                 alert('Server is not responding');
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             setData(data.filter(item => item._id !== id));
//         } catch (error) {
//             alert('Error deleting product');
//         }
//     };

//     const columns = [
//         { field: '_id', headerName: 'ID', width: 150 },
//         { field: 'name', headerName: 'Name', width: 200 },
//         { field: 'price', headerName: 'Price', width: 150 },
//         { field: 'createdAt', headerName: 'Created At', width: 200 },
//         {
//             field: 'actions',
//             headerName: 'Actions',
//             width: 150,
//             renderCell: (params) => (
//                 <Box>
//                     <IconButton onClick={() => handleDelete(params.row._id)} color="error">
//                         <DeleteIcon />
//                     </IconButton>
//                     <Link to={`/products/${params.row._id}`} style={{ textDecoration: 'none' }}>
//                         <Button variant="outlined" color="primary">View Details</Button>
//                     </Link>
//                 </Box>
//             )
//         }
//     ];

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <Box p={3}>
//             <Box mb={2} display="flex" alignItems="center">
//                 <TextField
//                     label="Search"
//                     variant="outlined"
//                     size="small"
//                     value={search}
//                     onChange={handleSearch}
//                     InputProps={{
//                         endAdornment: (
//                             <IconButton>
//                                 <SearchIcon />
//                             </IconButton>
//                         ),
//                     }}
//                     sx={{ mr: 2 }}
//                 />
//                 <Button variant="contained" color="primary" onClick={() => window.location.href = '/addproducts'}>
//                     Add Product
//                 </Button>
//             </Box>
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <DataGrid
//                     rows={filteredData}
//                     columns={columns}
//                     pageSize={pageSize}
//                     rowsPerPageOptions={[5, 10, 20]}
//                     pagination
//                     paginationMode="client"
//                     onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//                     sx={{ height: '60vh' }}
//                 />
//             )}
//         </Box>
//     );
// };

// export default ShowProducts;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Box, Button, TextField, IconButton, CircularProgress } from '@mui/material';
// import { Search as SearchIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en-gb'; // Import locale for date formatting

// const ShowProducts = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pageSize, setPageSize] = useState(5);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v1/products');
//                 setData(response.data.products.map(item => ({
//                     ...item,
//                     createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
//                 })));
//             } catch (error) {
//                 alert('Server is not responding');
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//         setCurrentPage(1); // Reset to first page on search
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             setData(data.filter(item => item._id !== id));
//         } catch (error) {
//             alert('Error deleting product');
//         }
//     };

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(search.toLowerCase())
//     );

//     const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//     const totalPages = Math.ceil(filteredData.length / pageSize);

//     return (
//         <Box p={3}>
//             <Box mb={2} display="flex" alignItems="center">
//                 <TextField
//                     label="Search"
//                     variant="outlined"
//                     size="small"
//                     value={search}
//                     onChange={handleSearch}
//                     InputProps={{
//                         endAdornment: (
//                             <IconButton>
//                                 <SearchIcon />
//                             </IconButton>
//                         ),
//                     }}
//                     sx={{ mr: 2 }}
//                 />
//                 <Button variant="contained" color="primary" onClick={() => window.location.href = '/addproducts'}>
//                     Add Product
//                 </Button>
//             </Box>
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <>
//                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Price</th>
//                                 <th>Created At</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {paginatedData.map(item => (
//                                 <tr key={item._id}>
//                                     <td>{item._id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.price}</td>
//                                     <td>{item.createdAt}</td>
//                                     <td>
//                                         <IconButton onClick={() => handleDelete(item._id)} color="error">
//                                             <DeleteIcon />
//                                         </IconButton>
//                                         <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
//                                             <Button variant="outlined" color="primary">View Details</Button>
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
//                         <Button
//                             variant="outlined"
//                             onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
//                             disabled={currentPage === 1}
//                         >
//                             Previous
//                         </Button>
//                         <span>Page {currentPage} of {totalPages}</span>
//                         <Button
//                             variant="outlined"
//                             onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
//                             disabled={currentPage === totalPages}
//                         >
//                             Next
//                         </Button>
//                     </Box>
//                 </>
//             )}
//         </Box>
//     );
// };

// export default ShowProducts;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Box, Button, TextField, IconButton, CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { Search as SearchIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en-gb'; // Import locale for date formatting

// const ShowProducts = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pageSize, setPageSize] = useState(5);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v1/products');
//                 setData(response.data.products.map(item => ({
//                     ...item,
//                     createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
//                 })));
//             } catch (error) {
//                 alert('Server is not responding');
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//         setCurrentPage(1); // Reset to first page on search
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             setData(data.filter(item => item._id !== id));
//         } catch (error) {
//             alert('Error deleting product');
//         }
//     };

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(search.toLowerCase())
//     );

//     const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//     const totalPages = Math.ceil(filteredData.length / pageSize);

//     return (
//         <Box p={3}>
//             <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
//                 <Typography variant="h4">Product List</Typography>
//                 <TextField
//                     label="Search"
//                     variant="outlined"
//                     size="small"
//                     value={search}
//                     onChange={handleSearch}
//                     InputProps={{
//                         endAdornment: (
//                             <IconButton>
//                                 <SearchIcon />
//                             </IconButton>
//                         ),
//                     }}
//                     sx={{ maxWidth: 300 }}
//                 />
//             </Box>
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>ID</TableCell>
//                                 <TableCell>Name</TableCell>
//                                 <TableCell>Price</TableCell>
//                                 <TableCell>Created At</TableCell>
//                                 <TableCell>Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {paginatedData.map(item => (
//                                 <TableRow key={item._id}>
//                                     <TableCell>{item._id}</TableCell>
//                                     <TableCell>{item.name}</TableCell>
//                                     <TableCell>{item.price}</TableCell>
//                                     <TableCell>{item.createdAt}</TableCell>
//                                     <TableCell>
//                                         <IconButton onClick={() => handleDelete(item._id)} color="error">
//                                             <DeleteIcon />
//                                         </IconButton>
//                                         <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
//                                             <IconButton color="primary">
//                                                 <EditIcon />
//                                             </IconButton>
//                                         </Link>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}
//             <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
//                 <Button
//                     variant="outlined"
//                     onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </Button>
//                 <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
//                 <Button
//                     variant="outlined"
//                     onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default ShowProducts;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Box, Button, TextField, IconButton, CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
// import { Search as SearchIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en-gb';
// import { useNavigate } from 'react-router-dom';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     fontWeight: 'bold',
//     backgroundColor: theme.palette.grey[200],
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.grey[50],
//     },
// }));

// const ShowProducts = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pageSize, setPageSize] = useState(5);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v1/products');
//                 setData(response.data.products.map(item => ({
//                     ...item,
//                     createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
//                 })));
//             } catch (error) {
//                 alert('Server is not responding');
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//         setCurrentPage(1);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             setData(data.filter(item => item._id !== id));
//         } catch (error) {
//             alert('Error deleting product');
//         }
//     };

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(search.toLowerCase())
//     );

//     function viewProductDetails(productId) {
//         navigate(`/products/${productId}`);
//     }

//     const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//     const totalPages = Math.ceil(filteredData.length / pageSize);

//     return (
//         <Box p={3}>
//             <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
//                 <Typography variant="h4">Product List</Typography>
//                 <TextField
//                     label="Search"
//                     variant="outlined"
//                     size="small"
//                     value={search}
//                     onChange={handleSearch}
//                     InputProps={{
//                         endAdornment: (
//                             <IconButton>
//                                 <SearchIcon />
//                             </IconButton>
//                         ),
//                     }}
//                     sx={{ maxWidth: 300 }}
//                 />
//             </Box>
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>ID</StyledTableCell>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell>Price</StyledTableCell>
//                                 <StyledTableCell>Created At</StyledTableCell>
//                                 <StyledTableCell>Actions</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {paginatedData.map(item => (
//                                 <StyledTableRow key={item._id}>
//                                     <TableCell>{item._id}</TableCell>
//                                     <TableCell>{item.name}</TableCell>
//                                     <TableCell>{item.price}</TableCell>
//                                     <TableCell>{item.createdAt}</TableCell>
//                                     <TableCell>
//                                         <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
//                                             <IconButton onClick={() => viewProductDetails(item._id)}color="primary">
//                                                 <EditIcon />
//                                             </IconButton>
//                                         </Link>
//                                         <IconButton onClick={() => handleDelete(item._id)} color="error">
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     </TableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}
//             <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
//                 <Button
//                     variant="outlined"
//                     onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </Button>
//                 <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
//                 <Button
//                     variant="outlined"
//                     onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next
//                 </Button>
//             </Box>
//         </Box>
//     );
// };
// export default ShowProducts;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Box, Button, TextField, IconButton, CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
// import { Search as SearchIcon, Visibility as ViewIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en-gb';
// import { useNavigate } from 'react-router-dom';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     fontWeight: 'bold',
//     backgroundColor: theme.palette.grey[200],
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.grey[50],
//     },
// }));

// const ShowProducts = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pageSize, setPageSize] = useState(5);
//     const [selectedProduct, setSelectedProduct] = useState(null); 
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v1/products');
//                 setData(response.data.products.map(item => ({
//                     ...item,
//                     createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
//                 })));
//             } catch (error) {
//                 alert('Server is not responding');
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//         setCurrentPage(1);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             setData(data.filter(item => item._id !== id));
//             if (selectedProduct && selectedProduct._id === id) {
//                 setSelectedProduct(null); 
//             }
//         } catch (error) {
//             alert('Error deleting product');
//         }
//     };

//     const handleViewDetails = (product) => {
//         setSelectedProduct(product);
//     };

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.excerpt.toLowerCase().includes(search.toLowerCase())
//     );

//     const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//     const totalPages = Math.ceil(filteredData.length / pageSize);

//     return (
//         <Box p={3}>
//             <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
//                 <Typography variant="h4">Product List</Typography>
//                 <TextField
//                     label="Search"
//                     variant="outlined"
//                     size="small"
//                     value={search}
//                     onChange={handleSearch}
//                     InputProps={{
//                         endAdornment: (
//                             <IconButton>
//                                 <SearchIcon />
//                             </IconButton>
//                         ),
//                     }}
//                     sx={{ maxWidth: 300 }}
//                 />
//             </Box>
//             {loading ? (
//                 <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
//                     <CircularProgress />
//                 </Box>
//             ) : (
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>ID</StyledTableCell>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell>Price</StyledTableCell>
//                                 <StyledTableCell>Created At</StyledTableCell>
//                                 <StyledTableCell>Actions</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {paginatedData.map(item => (
//                                 <StyledTableRow key={item._id}>
//                                     <TableCell>{item._id}</TableCell>
//                                     <TableCell>{item.name}</TableCell>
//                                     <TableCell>{item.price}</TableCell>
//                                     <TableCell>{item.createdAt}</TableCell>
//                                     <TableCell>
//                                         <IconButton onClick={() => handleViewDetails(item)} color="primary">
//                                             <ViewIcon />
//                                         </IconButton>
//                                         <IconButton onClick={() => handleDelete(item._id)} color="error">
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     </TableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}
//             {selectedProduct && (
//                 <Box mt={2} p={2} border={1} borderColor="grey.300" borderRadius="8px">
//                     <Typography variant="h6">Product Details</Typography>
//                     <Typography><b>ID:</b> {selectedProduct._id}</Typography>
//                     <Typography><b>Name:</b> {selectedProduct.name}</Typography>
//                     <Typography><b>Price:</b> {selectedProduct.price}</Typography>
//                     <Typography><b>Description:</b> {selectedProduct.excerpt}</Typography>
//                     <Typography><b>Created At:</b> {selectedProduct.createdAt}</Typography>
//                 </Box>
//             )}
//             <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
//                 <Button
//                     variant="outlined"
//                     onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </Button>
//                 <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
//                 <Button
//                     variant="outlined"
//                     onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default ShowProducts;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, IconButton, CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled, MenuItem, Select } from '@mui/material';
import { Search as SearchIcon, Visibility as ViewIcon, Delete as DeleteIcon } from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    backgroundColor: theme.palette.grey[200],
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey[50],
    },
}));

const ShowProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [sortField, setSortField] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/api/v1/products');
                setData(response.data.products.map(item => ({
                    ...item,
                    createdAt: dayjs(item.createdAt).format('D MMMM YYYY')
                })));
            } catch (error) {
                alert('Server is not responding');
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const handlePriceFilter = (event) => {
        setPriceFilter(event.target.value);
        setCurrentPage(1);
    };

    const handleDateFilter = (event) => {
        setDateFilter(event.target.value);
        setCurrentPage(1);
    };

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
            setData(data.filter(item => item._id !== id));
            if (selectedProduct && selectedProduct._id === id) {
                setSelectedProduct(null); 
            }
        } catch (error) {
            alert('Error deleting product');
        }
    };

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const filteredData = data.filter(item =>
        (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(search.toLowerCase())) &&
        (priceFilter === '' || item.price === Number(priceFilter)) &&
        (dateFilter === '' || dayjs(item.createdAt).format('YYYY-MM-DD') === dateFilter)
    );

    const sortedData = filteredData.sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const totalPages = Math.ceil(filteredData.length / pageSize);

    return (
        <Box p={3}>
            <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h4">Product List</Typography>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    value={search}
                    onChange={handleSearch}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                    sx={{ maxWidth: 300 }}
                />
            </Box>
            <Box mb={2} display="flex" alignItems="center" gap={2}>
                <TextField
                    select
                    label="Price Filter"
                    value={priceFilter}
                    onChange={handlePriceFilter}
                    variant="outlined"
                    size="small"
                    sx={{ maxWidth: 200 }}
                >
                    <MenuItem value="">All Prices</MenuItem>
                    <MenuItem value="1000">1000</MenuItem>
                    <MenuItem value="2000">2000</MenuItem>
                    <MenuItem value="3000">3000</MenuItem>
                </TextField>
                <TextField
                    type="date"
                    label="Date Filter"
                    value={dateFilter}
                    onChange={handleDateFilter}
                    variant="outlined"
                    size="small"
                    sx={{ maxWidth: 200 }}
                />
            </Box>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell onClick={() => handleSort('_id')}>ID</StyledTableCell>
                                <StyledTableCell onClick={() => handleSort('name')}>Name</StyledTableCell>
                                <StyledTableCell onClick={() => handleSort('price')}>Price</StyledTableCell>
                                <StyledTableCell onClick={() => handleSort('createdAt')}>Created At</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map(item => (
                                <StyledTableRow key={item._id}>
                                    <TableCell>{item._id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>{item.createdAt}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleViewDetails(item)} color="primary">
                                            <ViewIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(item._id)} color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            {selectedProduct && (
                <Box mt={2} p={2} border={1} borderColor="grey.300" borderRadius="8px">
                    <Typography variant="h6">Product Details</Typography>
                    <Typography><b>ID:</b> {selectedProduct._id}</Typography>
                    <Typography><b>Name:</b> {selectedProduct.name}</Typography>
                    <Typography><b>Price:</b> {selectedProduct.price}</Typography>
                    <Typography><b>Description:</b> {selectedProduct.excerpt}</Typography>
                    <Typography><b>Created At:</b> {selectedProduct.createdAt}</Typography>
                </Box>
            )}
            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <Button
                    variant="outlined"
                    onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
                <Button
                    variant="outlined"
                    onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default ShowProducts;
