import {useState} from "react";


function Counter()
//use state returns an array with the value and index 0 and the function used to change value at 1. and we must use this function only to change the value of the state.
{
    let [stateCount,setStateCount]=useState(0);
    function increase()
    {
        setStateCount(stateCount+1);
    }
    function decrease()
    {
        setStateCount(stateCount-1);
    }
    function reset()
    {
        setStateCount(stateCount*0);
    }
    return(
        <div className="counterDiv">
            <h1>Counter</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <h1>{stateCount}</h1>
        </div>
    )
}
export default Counter;