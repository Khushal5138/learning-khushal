import { useState , useMemo } from "react";

const useMemoHookExample = () => {
    const [increment , setIncrement] = useState(0);
    const [initialVal , setInitialVal] = useState(1);

    console.log("component function called again");

    const ComplexCalc = ( mul = 1) => {
        console.log(`initial sum value ${mul}`);
        for(let i=1 ; i<4 ; i++)
        {
            mul = mul * i;
            console.log("ran");
        }
        console.log("mul changed again");
        return mul;
    };

    const increase = () => {
        setIncrement(increment + 1);
    };

    const increaseInitialVal = () => {
        setInitialVal(initialVal + 1);
    };

    const optimizedComplexCalc = useMemo(() => ComplexCalc(initialVal) , [initialVal]);

    return(
        <div>
            <button onClick={increase}>increment</button>
        <div>
            {increment}
        </div>
        <br/>
        <button onClick={increaseInitialVal}> increase initial val</button>
        <div>
            initial val = {initialVal};
        </div>
        <p>Value = {optimizedComplexCalc}</p>
        </div>
    );

}
export default useMemoHookExample;