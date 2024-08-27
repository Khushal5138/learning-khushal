import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {/* <h2>Product List</h2> */}
      {products.map(product => (
        <div key={product._id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
