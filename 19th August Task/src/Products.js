import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Products() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [categories, setCategories] = useState([]);
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch products and categories on component mount
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);

                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);

                // Set initial category based on URL
                if (category && category !== 'All') {
                    setFilteredData(response.data.filter(product => product.category === category));
                }
            })
            .catch(error => console.log(error));
    }, [category]);

    function handleCategoryClick(category) {
        navigate(`/category/${category}`);
    }

    return (
        <div className="Jai">
            <h1>Product Info</h1>

            {/* Category buttons */}
            <div className="category-buttons">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={function () { handleCategoryClick(cat)}}
                        className={cat === category ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="outercontainer">
                {filteredData.map((val, i) => (
                    <div className="lst" key={i}>
                        <img src={val.image} alt="product Img" width={"150px"} height={"200px"} /><br /><hr /><br />
                        <div id="productInfo">
                            <p><strong>Price: </strong> {val.price}</p>
                            <p><strong>Description: </strong> {val.description}</p>
                            <p><strong>Category: </strong>{val.category}</p>
                            <p><strong>Rating: </strong> {val.rating.rate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
