import {useState} from "react";

function Calculator()
{
    let [num,setNum]=useState("Add Degrees");
    let [res,setRes]=useState("0");
    
    function changeDeg(e)
    {
        setNum(e.target.value);
    }
    function calcSin()
    {
        res=setRes( Number(Math.sin(num)) );
    }
    function calcCos()
    {
        res=setRes( Number(Math.cos(num)) );
    }
    function calcTan()
    {
        res=setRes( Number(Math.tan(num)) );
    }
    return(
        <div className="Calculator">
            <h1> Calculator </h1>
            <input type="number" className="calc" name="numbers" onChange={changeDeg}/>
            <button className="num" onClick={calcSin}>Sin</button>
            <button className="num" onClick={calcCos}>Cos</button>
            <button className="num" onClick={calcTan}>Tan</button>
            <div>
                <h1>{res}</h1>    
            </div>
        </div>
    )
}
export default Calculator;