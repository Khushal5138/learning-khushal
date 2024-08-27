import { useEffect, useState } from "react";
import axios from "axios";

function Products(){
    // let initData = [];
    let [data,setData] = useState([]);


    function getStore(){
        axios
        .get("https://fakestoreapi.com/products")
        .then(function(response){
            setData(response.data);
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        })
    }


    return(
        <div>
            <button className="showProduct" onClick={getStore}>Show Products</button>
            { data.map(function(val){
                return <div className="outercontainer">

                <div className="lst">
                    <p>Title = {val.title}</p> <br />
                    <p>Price = {val.price}</p> <br />
                    <p>Title = {val.description}</p> <br />
                    <p>Title = {val.category}</p>  <br />              
                    <p>Rating = {val.rating.rate}</p>  <br />  
                             
                    <img src={val.image} alt="product Img" width={"100px"} height={"100px"}/>
                </div>
                </div>
            }) }
        </div>
    )
}
export default Products;