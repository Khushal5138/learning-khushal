import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate,Link } from "react-router-dom";

function Fake() {
    const [details, setDetails] = useState([]);
    const [filteredDetails, setFilteredDetails] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Function is called on load");
        getDetails();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredDetails(details);
        } else {
            setFilteredDetails(details.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, details]);

    function getDetails() {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                console.log(response.data);
                setDetails(response.data);

                const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);

    }

    return (
        <div className="fake">
            <h1>Fake Store Details</h1>

            <div className="category-filter">
                {categories.map(cat => (
                    <Link to={`/${cat}`}><button
                        key={cat}
                        onClick={function()  {handleCategoryClick(cat)}}
                        className={cat === selectedCategory ? 'active' : ''}
                    >
                        {cat}
                    </button></Link>
                ))}
            </div>
              
            <div className="product-list">
                {filteredDetails.map((val, index) => (
                    <div key={index} className="product-card">
                        <br/>
                        <div>
                            <img src={val.image} alt={val.title} className="product-image" height={"150px"} width={"150px"}/>
                        </div><br/>
                        <b>Title:</b> {val.title}
                        <div>
                            <b>Price:</b> ${val.price}
                        </div>
                        <div>
                            <b>Description:</b> {val.description.slice(0,70)}
                        </div>
                        <div>
                            <b>Category:</b> {val.category}
                        </div>
                        
                        <div>
                            <b>Rating:</b> {val.rating.rate}<br/>
                            <b>Count:</b> {val.rating.count}
                        </div><br/>
                        {/* <Link onClick={() => navigate(`/products/${val.id}`)}>Details</Link> */}
                        <Link to={`/${val.category}/${val.id}`}><button>Details</button></Link>

                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Fake;
