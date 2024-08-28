import { useEffect, useState } from "react";
import axios from "axios";

function Products()
{
    let [data,setData] = useState([]);


    function getProduct()
    {
        axios
        .get("https://fakestoreapi.com/products")
        .then(function(response)
        {
            setData(response.data);
            console.log(response.data);
        }).catch(function(error)
        {
            console.log(error);
        })
    };
    return(
        <div>
            <button className="Products" onClick={getProduct}>Product Details</button>
            { data.map(function(val,i){
                return <div>

                <div className="product">
                    <p>Title of Products:{val.title}</p> 
                    <br/>
                    <p>Price of Products:{val.price}</p> 
                    <br />
                    <p>Description of Products:{val.description}</p> 
                    <br />
                    <p>Category of Products:{val.category}</p>  
                    <br />              
                    <p>Rating of Products:{val.rating.rate}</p>  
                    <br />   
                    <img src={val.image} alt="img of product" width={"100px"} height={"100px"}/>
                </div>
                </div>
            }) }
        </div>
    )
}
export default Products;