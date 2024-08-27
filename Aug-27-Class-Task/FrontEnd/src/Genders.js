import { useEffect, useState } from "react";
import axios from "axios";
function Genders(){
    let [name,setNameEntered] = useState("");
    let[dispName,setDispName] = useState("");

    function nameChanged(e){
        setNameEntered(e.target.value);
    }



    function getName(name){

        let url = "https://api.genderize.io/?name="+name;
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
        <div className="Gender">
            <input type="text" name="todoitem" value={name} onChange={nameChanged} placeholder="Enter Your Name"/>
            <button onClick={function(){
                getName(name);
            }}>Get Gender</button>
            <p>{dispName.gender}</p>
        </div>

    )
}
export default Genders;