//useEffect is used like a constructor as it is called once when the code starts. 
//however if you put any state value in the array, it will also execute whenever the state value in the array also changes.

import {useState, useEffect} from "react";
const ExampleUseEffect = () => {
    console.log("ExampleUseEffect called");
    const [count, setCount] = useState(0);
    const [age,setAge] = useState(20);

    useEffect(() =>{
        console.log("i ran once");
        const destructor = () =>{
            alert("You just removed me and cleared the array");
        }
        return destructor;
    },[]);

    useEffect(() => {
        console.log("age changed, let send admin an email.");
    }, [age]);

    useEffect(() => {
        console.log(`count from useEffect Function = ${count}`)
    },[count]);

    const increase = () =>{
        setCount(count+1);
    };

    const increaseAge = () =>{
        setAge(age+1);
    };
    return (
        <div>
            <h1>useEffect Example</h1>
            <h3>{count}</h3>
            <h3>{age}</h3>
            <button onClick={increase}>increase</button>
            <button onClick={increaseAge}>increase Age</button>
        </div>
    );
};
export default ExampleUseEffect;