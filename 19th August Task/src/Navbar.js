// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Navbar.css'; 

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <ul className="navbar-menu">
//                 <li className="navbar-item">   
//                     <Link to="/products" className="navbar-link">Products</Link>
//                     <Link to="/UsersPage" className="navbar-link">Users</Link> 
//                     <Link to="/admin" className="navbar-link">Orders</Link>
//                     <Link to="/Category" className="navbar-link">Category</Link>
//                 </li>
//                 {/* <li className="navbar-item">   
//                     <Link to="/show" className="navbar-link">Show</Link>
//                 </li> */}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Home as HomeIcon, Menu as MenuIcon, AccountCircle, MoreVert as MoreIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#3f51b5', marginBottom: '20px' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <center>My Dashboard</center>
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="mobile-menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="mobile-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem component={Link} to="/products" onClick={handleMenuClose}>Products</MenuItem>
                            <MenuItem component={Link} to="/addproducts" onClick={handleMenuClose}>Add A Product</MenuItem>
                            <MenuItem component={Link} to="/admin" onClick={handleMenuClose}>Orders</MenuItem>
                            <MenuItem component={Link} to="/create" onClick={handleMenuClose}>Category</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <div>
                        <Button color="inherit" component={Link} to="/products">Products</Button>
                        <Button color="inherit" component={Link} to="/addproducts">Add A Product</Button>
                        <Button color="inherit" component={Link} to="/admin">Orders</Button>
                        <Button color="inherit" component={Link} to="/Category">Category</Button>
                    </div>
                )}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="account"
                    component={Link} 
                    to="/profile"
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
