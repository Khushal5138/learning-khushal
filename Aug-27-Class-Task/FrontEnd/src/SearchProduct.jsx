// import React, { useState } from 'react';
// import axios from 'axios';
// // import './SearchProduct.css';

// function SearchProduct() {
//   const [name, setName] = useState('');
//   const [availability, setAvailability] = useState('');
//   const [price, setPrice] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const searchByName = async () => {
//     try {
//       const response = await axios.get(`/products/search/${name}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching by name:', error);
//     }
//   };

//   const searchByAvailability = async () => {
//     try {
//       const response = await axios.get(`/products/searchAvailability/${availability}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching by availability:', error);
//     }
//   };

//   const searchByPrice = async () => {
//     try {
//       const response = await axios.get(`/products/searchPrice/${price}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching by price:', error);
//     }
//   };

//   return (
//     <div className="search-product">
//       <h2>Search Products</h2>
//       <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Search by Name" />
//       <button onClick={searchByName}>Search</button>

//       <select value={availability} onChange={e => setAvailability(e.target.value)}>
//         <option value="">Search by Availability</option>
//         <option value="available">Available</option>
//         <option value="unavailable">Unavailable</option>
//       </select>
//       <button onClick={searchByAvailability}>Search</button>

//       <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Search by Price" />
//       <button onClick={searchByPrice}>Search</button>

//       <div className="search-results">
//         {searchResults.map(product => (
//           <div key={product._id} className="search-result-item">
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <p>Availability: {product.availability}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchProduct;


import React, { useState } from 'react';
import axios from 'axios';
import './SearchProduct.css';

function SearchProduct() {
  const [name, setName] = useState('');
  const [availability, setAvailability] = useState('');
  const [price, setPrice] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchByName = async () => {
    try {
      const response = await axios.get(`/products/search/${name}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching by name:', error);
    }
  };

  const searchByAvailability = async () => {
    try {
      const response = await axios.get(`/products/searchAvailability/${availability}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching by availability:', error);
    }
  };

  const searchByPrice = async () => {
    try {
      const response = await axios.get(`/products/searchPrice/${price}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching by price:', error);
    }
  };

  return (
    <div className="search-product-container">
      <div className="search-product-form">
        <h2>Search Products</h2>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Search by Name"
            className="search-input"
          />
          <button onClick={searchByName} className="search-btn">Search</button>
        </div>

        <div className="form-group">
          <select
            value={availability}
            onChange={e => setAvailability(e.target.value)}
            className="search-select"
          >
            <option value="">Search by Availability</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <button onClick={searchByAvailability} className="search-btn">Search</button>
        </div>

        <div className="form-group">
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Search by Price"
            className="search-input"
          />
          <button onClick={searchByPrice} className="search-btn">Search</button>
        </div>
      </div>

      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(product => (
            <div key={product._id} className="search-result-item">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-availability">Availability: {product.availability}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
