// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ProductsNavbar.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <ul className="navbar-menu">
//                     <li className="navbar-item">
//                         <Link to="/" className="navbar-link">Home</Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/add" className="navbar-link">Add Product</Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/search" className="navbar-link">Search Product</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsNavbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/add" className="navbar-link">Add Product</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/search" className="navbar-link">Search Product</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
