import {useState} from "react";
function Numbers()
{
    let [num1,setNum1]=useState("Add First Number");
    let [num2,setNum2]=useState("Add Second Number");
    let [res,setRes]=useState("0");
    
    function changeNum1(e)
    {
        setNum1(e.target.value);
    }
    function changeNum2(e)
    {
        setNum2(e.target.value);
    }
    function addNum()
    {
        res=setRes( Number(num1)+Number(num2) );
    }
    return(
        <div className="Num">
            <h1> Add Two Numbers </h1>
            <input type="number" className="num" name="numbers" onChange={changeNum1}/>
            <input type="number" className="num" name="numbers" onChange={changeNum2}/>
            <button className="num" onClick={addNum}>Add Numbers</button>
            <div>
                <h1>{res}</h1>    
            </div>
        </div>
    )
}
export default Numbers;