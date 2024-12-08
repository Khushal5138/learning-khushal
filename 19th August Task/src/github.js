import axios from "axios";
import { useState } from "react";
function Github(){
    let [id,setId]=useState("");
    let [avatar,setAvatar]=useState("");

    function getDetails(){
        let value=document.querySelector("input").value;
        let url="https://api.github.com/users/"+value;
        axios.get(url)
        .then(function(response){
            setId(response.data.id);
            setAvatar(response.data.avatar_url);
        })
        .catch(function(error){
            console.log("error!! Server not responding May be!!!");
        })
    }
    return (
        <div>
            <h1>GitHub Details</h1>
            <input type="text" placeholder="Enter user name"/>
            <button onClick={getDetails}>Search Details</button>
            <h3>Id: {id}</h3>
            <img src={avatar} alt="avatar" height={"200px"} width={"200px"}/>
        </div>
    )
}

export default Github;