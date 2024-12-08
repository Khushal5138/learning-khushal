import { useState } from "react";

function Hobbies(){
    let hobbieslist=[];
    let [hobbies,setHobby]=useState(hobbieslist);
    let [HobbyEntered, clearDefault]=useState("");
    function changeTodoEntered(e){
        clearDefault(e.target.value);
    }
    function addHobby(){
        let newList=[...hobbies,HobbyEntered];
        setHobby(newList);
    }
    function deleteHobby(indexToDelete)
    {
        let newList=hobbies.filter(function(value,index){
            if(index==indexToDelete)
                return false;
            return true;
        });
        setHobby(newList);
    }
    function clearAllHobbies(){
        hobbies=[];
        setHobby(hobbies);
    }
    return(
        <div className="Hobbies">
            <h1>Hobbies List</h1>
            <input type="text" name="HobbieName" value={HobbyEntered} onChange={changeTodoEntered} placeholder="Enter Hobby"/>
            <button onClick={addHobby} id="green">Add todo</button>
            <button onClick={clearAllHobbies} id="red">Clear All</button>
            {
                hobbies.map(function(value,index){
                  return (<div id="rev">{value}<button id="red" onClick={function(){deleteHobby(index);}}>
                    X</button></div>);
                })
            }
        </div>
    );
}

export default Hobbies;