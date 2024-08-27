import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteProduct.css'; // Import your CSS file

const DeleteProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/products/${id}`);
                if (response.status === 200) {
                    setProduct(response.data);
                } else {
                    console.error('Error fetching product:', response.status);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                alert('Error fetching product!');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/products/${id}`);
            if (response.status === 200) {
                alert('Product deleted successfully!');
                navigate('/products');
            } else {
                console.error('Error deleting product:', response.status);
                alert('Error deleting product!');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product!');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="delete-product-container">
            <h2>Delete Product</h2>
            {product ? (
                <div className="product-info">
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Availability:</strong> {product.availability}</p>
                    <button className="delete-btn" onClick={handleDelete}>
                        Delete Product
                    </button>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default DeleteProduct;
