import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteProducts from './DeleteProducts';

function ShowProducts() {
    const [data, setData] = useState([]);
    const [id,setID]=useState("");
    const navigate = useNavigate();

    function displayProducts() {
        const url = "http://localhost:3000/api/v1/products";
        axios.get(url)
        .then(function (response) {
            setData(response.data.products);
            setID(response.data.products._id);
        })
        .catch(function (error) {
            alert("Server is not responding",error);
        });
    }   

function viewProductDetails(productId) {
    navigate(`/products/${productId}`);
}

return (
    <div className='outer'>
        <h1>Get Product Details</h1>
        <button onClick={displayProducts}>Show Products</button><br/><br/>
        <div className='inner'>
        {
            data.map(function (value) {
            return (
                <div className='inside' key={value._id}>
                    <p><b>Name:</b> {value.name}</p>
                    <p><b>Price:</b> {value.price}</p>
                    <button onClick={() => viewProductDetails(value._id)}>View Details</button>
                </div>
            );
            })
        }
        </div>
    </div>
);
}

export default ShowProducts;