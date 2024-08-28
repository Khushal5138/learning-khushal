import {useState , useEffect} from "react";
import axios from "axios";
import ShowProducts from "./ShowProducts";
import Addproducts from "./Addproducts";
function DeleteProducts()
{
    //let todosInitialValue=[{name: "Default Name",status: "Default Status"}];
    let [ids,setIds]=useState({});
    let [idEntered, setIdEntered]=useState("Enter ID To Delete ");
    //let [statusEntered,setStatusEntered]=useState("Default Status");
    useEffect(function()
    {
        console.log("function called on load");
        displayProducts();
    },[]);

    function changeIdEntered(e)
    {
        setIdEntered(e.target.value);
    }

    function deleteId(index)
    {
        axios
            .delete(`/api/v1/products/${index}`)
            .then(function(response)
            {
                console.log(response);
                displayProducts();
            })
            .catch(function(error)
            {
                console.log(error);
            });
        let newIds=ids.filter(function (i)
        {
            if(index == i)
            {
                return false;
            }
            else
            {
                return true;
            }
        });
    setIds(newIds);
    }
    function reset()
    {
        let ids=[];
        setIds(newIds);
    }
    return(
        <div className="Hobbies">
            <h1> Hobbies </h1>
            <input type="text" name="todoitem" value={idEntered} onChange={changeIdEntered}/>
            <button className="Hobby" onClick={reset}>Reset All</button>
            {
                Ids.map(function(val,index)
                {
                    return(
                        <div>
                            {val.name}
                            <button className="hobbyBtn" onClick={function ()
                                {
                                    deleteId(index);
                                }
                            }>Delete</button>
                            <div>
                                Status:{val.status}
                            </div>
                        </div>

                    );
                })
            }
        </div>
    );

}
export default DeleteProducts;