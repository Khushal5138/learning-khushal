import { useState } from "react"

function Add(){
    let [num1,setStateCount]=useState(0);
    let [num2,setStateCount2]=useState(0);
    let [total,setStateSum]=useState(0);

    function number(e){
        setStateCount(e.target.value);
    }
    function number2(e){
        setStateCount2(e.target.value);
    }
    function add(){
        setStateSum(Number(num1)+Number(num2));
    }
    return (
        <div className="Add">
            <h1>Addition</h1>
            <input type="text" name="num1" onChange={number} placeholder="Enter 1st Number"/>
            <input type="text" name="num2" onChange={number2} placeholder="Enter 2nd Number"/>
            <button onClick={add} id="green">Add</button>
            <div>
                <h3>Total: </h3><h1>{total}</h1>
            </div>
        </div>
    )
}

export default Add;