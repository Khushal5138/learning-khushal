// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './ProductEdit.css'; 

// const EditProduct = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [product, setProduct] = useState({
//         name: '',
//         price: '',
//         availability: 'available',
//     });

//     useEffect(() => {

//         const fetchProduct = async () => {
//             try {
//                 const response = await axios.get(`/products/${id}`);
//                 setProduct(response.data);
//             } catch (error) {
//                 console.error('Error fetching product:', error);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     const handleChange = (e) => {
//         setProduct({
//             ...product,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`/products/${id}`, product);
//             navigate('/');
//         } catch (error) {
//             console.error('Error updating product:', error);
//         }
//     };

//     return (
//         <div className="edit-product-container">
//             <h2>Edit Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="price">Price:</label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="availability">Availability:</label>
//                     <select
//                         id="availability"
//                         name="availability"
//                         value={product.availability}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="available">Available</option>
//                         <option value="unavailable">Unavailable</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="submit-btn">Update Product</button>
//             </form>
//         </div>
//     );
// };

// export default EditProduct;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductEdit.css'; 

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        availability: 'available',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/products/${id}`, product);
            navigate('/');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Availability:</label>
                    <select
                        id="availability"
                        name="availability"
                        value={product.availability}
                        onChange={handleChange}
                        required
                    >
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
