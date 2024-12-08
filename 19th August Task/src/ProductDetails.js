import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./products.css";

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
        setProduct(response.data.product);
      } catch (err) {
        setError("Error fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const Delete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
      navigate('/products');
    } catch (err) {
      setError("Error deleting product.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <p><b>Name:</b> {product.name}</p>
      <p><b>Description:</b> {product.excerpt}</p>
      <p><b>Code:</b> {product.code}</p>
      <p><b>Price:</b> {product.price}</p>
      <button id="red" onClick={Delete}>Delete</button>
    </div>
  );
}

export default ProductDetails;