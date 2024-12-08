import { useState,useEffect } from "react";
import axios from 'axios';

function GenderAPI(){
    function search(){
        let value=document.querySelector("input").value;
        let url="https://api.genderize.io/?name="+value;
        axios.get(url)
        .then(function(response){
            console.log(response.data);
            alert(JSON.stringify(response.data["gender"]));
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(
        <div>
            <h1>Gender Prediction</h1>
            <input type="text" placeholder="Enter Name"/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default GenderAPI;