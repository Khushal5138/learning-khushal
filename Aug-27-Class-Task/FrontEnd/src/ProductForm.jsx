import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductForm.css';


function ProductForm({ product, onSave }) {
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [availability, setAvailability] = useState(product ? product.availability : 'available');

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, price, availability };
    try {
      if (product) {
        await axios.put(`/products/${product._id}`, productData);
      } else {
        await axios.post('/products', productData).then(navigate("/"));
      }
      onSave();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>{product ? 'Edit' : 'Add'} Product</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
      <select value={availability} onChange={e => setAvailability(e.target.value)} required>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
      <button type="submit">{product ? 'Update' : 'Add'} Product</button>
    </form>
  );
}

export default ProductForm;

