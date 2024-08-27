// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './ProductDetail.css';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`/products/${id}`)
//       .then(response => setProduct(response.data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [id]);

//   return (
//     <div className="product-detail">
//       {product ? (
//         <>
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <p>Availability: {product.availability}</p>
//         </>
//       ) : (
//         <p>Loading product details...</p>
//       )}
//     </div>
//   );
// }

// export default ProductDetail;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <div className="product-detail-container">
      {product ? (
        <div className="product-detail">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-availability">Availability: {product.availability}</p>
        </div>
      ) : (
        <p className="loading-message">Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetail;
