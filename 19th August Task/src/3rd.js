import { useState } from "react"

function Trigonometry(){
    let [val,setVal]=useState(0);
    let [ans,setAns]=useState(0);

    function storeDegrees(e){
        setVal(e.target.value);
    }
    function doSin(){
        setAns(Math.round(Number(Math.sin(val))));
    }
    function doCos(){
        setAns(Math.round(Number(Math.cos(val))));
    }
    function doTan(){
        setAns(Math.round(Number(Math.tan(val))));
    }
    return (
        <div className="Trigo">
            <h1>Trigonometry</h1>
            <input type="text" name="degrees" onChange={storeDegrees} placeholder="Enter Degrees"/>
            <button onClick={doSin} id="red">Sin</button>
            <button onClick={doCos} id="green">Cos</button>
            <button onClick={doTan} id="red">Tan</button>
            <div>
                <h3>Value: </h3>
                <h1>{ans}</h1>
            </div>
        </div>
    )
}

export default Trigonometry;