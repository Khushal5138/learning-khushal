import { useState, useEffect } from "react";
import axios from "axios";

function DeleteProducts() {
    const [products, setProducts] = useState([]);
    const [idEntered, setIdEntered] = useState("");

    useEffect(() => {
        displayProducts();
    }, []);

    function displayProducts() {
        axios.get("http://localhost:3000/api/v1/products")
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }

    function changeIdEntered(e) {
        setIdEntered(e.target.value);
    }

    function deleteProduct() {
        const id = idEntered.trim();
        if (!id) {
            alert("Please enter a valid product ID.");
            return;
        }

        axios.delete(`http://localhost:3000/api/v1/products/${id}`)
            .then(response => {
                console.log("Product deleted:", response.data);
                displayProducts(); 
                setIdEntered(""); 
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    }

    function reset() {
        setIdEntered("");
    }

    return (
        <div className="DeleteProducts">
            <h1>Delete Products</h1>
            <input
                type="text"
                name="productID"
                value={idEntered}
                onChange={changeIdEntered}
                placeholder="Enter ID To Delete"
            />
            <button className="deleteBtn" onClick={deleteProduct}>Delete Product</button>
            <button className="resetBtn" onClick={reset}>Reset</button>
            <div>
                {products.map(product => (
                    <div key={product._id} className="productItem">
                        <p>{product.name}</p>
                        <div>Status: {product.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeleteProducts;