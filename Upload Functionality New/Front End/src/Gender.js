import {useState , useEffect} from "react";
import axios from "axios";

function Gender()
{
    let [gender,setGender]=useState([]);
    let [genderEntered, setGenderEntered]=useState("Enter Name");
    //let [statusEntered,setStatusEntered]=useState("No Gender");
    useEffect(function()
    {
        console.log("function called on load");
        getGender();
    },[]);

    function getGender()
    {
        let x="https://api.genderize.io/?name="+gender;
        axios
        .get(x)
        .then(function(response)
        {
            console.log(response.data);
            setGender(response.data);
        })
        .catch(function(error)
        {
            console.log(error);
        })
    }

    function changeGenderEntered(e)
    {
        setGenderEntered(e.target.value);
    }


    return(
        <div className="Gender">
            <h1> Write a Name </h1>
            <input type="text" name="todoitem" value={genderEntered} onChange={changeGenderEntered}/>
            <button className="gen" onClick={getGender}>Check</button>
            <p>{genderEntered}</p>
            {/* <select onChange={function(e)
                {
                    addGender(e.target.value);
                }
            }>
            </select> */}
            {
                // gender.map(function(val,index)
                // {
                //     return(
                //         <div>
                //             {val.name}
                //             <button className="hobbyBtn" onClick={function ()
                //                 {
                //                     deleteTodo(index);
                //                 }
                //             }>Delete</button>
                //             <div>
                //                 Status:{val.status}
                //             </div>
                //         </div>

                //     );
                // })
            }
            <div></div>
        </div>
    )
}
export default Gender;