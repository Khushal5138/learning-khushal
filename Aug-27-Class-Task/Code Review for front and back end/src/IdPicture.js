import { useEffect, useState } from "react";
import axios from "axios";
function IdPicture(){
    let [name,setNameEntered] = useState("");
    let[dispName,setDispName] = useState("");

    function IdChanged(e){
        setNameEntered(e.target.value);
    }



    function getName(name){

        let url = "https://api.github.com/users/"+name;
        axios
        .get(url)
        .then(function(response){
            console.log(response.data);
            setDispName(response.data);
        }).catch(function(error){
            console.log(error);
        })

        
    };

    return(
        <div className="IdPicture">
            <input type="text" name="todoitem" value={name} onChange={IdChanged} placeholder="Enter Your Name"/>
            <button onClick={function(){
                getName(name);
            }}>Get Details</button>
            <p>{dispName.id}</p>
            <img src={dispName.avatar_url} alt="Image"/>
        </div>

    )
}
export default IdPicture;