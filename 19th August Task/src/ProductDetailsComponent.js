import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetailsComponent() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response => {
            setProduct(response.data);
        });
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            
            <div>
                <b>Rating:</b> {product.rating.rate}<br/>
                <b>Count:</b> {product.rating.count}
            </div>
        </div>
    );
}

export default ProductDetailsComponent;