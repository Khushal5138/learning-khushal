import { useEffect, useState } from "react";
import axios from "axios";

function Products(){
    let [data,setData] = useState([]);


    function getGender(){
        axios
        .get("https://fakestoreapi.com/products")
        .then(function(response){
            setData(response.data);
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        })
    };

    return(
        <div className="Jai">
            <h1>Product Info</h1>
            <button className="showProduct" onClick={getGender}>Show Products</button>
            <div className="outercontainer">
            { 
                data.map(function(val,i){
                    return (
                        <div className="lst">
                            <img src={val.image} alt="product Img" width={"150px"} height={"200px"}/><br/><hr/><br/>
                            <div id="productInfo">
                                <p><strong>Price: </strong> {val.price}</p>
                                <p><strong>Description: </strong> {val.description}</p> 
                                <p><strong>Category: </strong>{val.category}</p>               
                                <p><strong>Rating: </strong> {val.rating.rate}</p>      
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}
export default Products;