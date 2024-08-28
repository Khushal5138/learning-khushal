// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './ProductList.css';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="product-list">
//       {/* <h2>Product List</h2> */}
//       {products.map(product => (
//         <div key={product._id} className="product-item">
//           <h3>{product.name}</h3>
//           <p>Price: ${product.price}</p>
//           <p>Availability: {product.availability}</p>
//           <div className="product-actions">
//             <Link to={`/edit/${product._id}`} className="edit-button"><button>Edit</button></Link>
//             <Link to={`/delete/${product._id}`} className="delete-button"><button>Delete</button></Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-availability">Availability: {product.availability}</p>
            <div className="product-actions">
              <Link to={`/edit/${product._id}`} className="action-button edit-button"><button>Edit</button></Link>
              <Link to={`/delete/${product._id}`} className="action-button delete-button"><button>Delete</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
