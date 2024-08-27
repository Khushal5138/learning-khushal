import { useRef } from "react";

function RefHookExample(){
    const refOb=useRef(null);
    const buttonOb=useRef(null);
    // const ShowName= () => {
    //     console.log(refOb.current);
    //     alert(refOb.current.value);
    // };

    const attachEvent =() =>{
        buttonOb.current.addEventListener("click",clickFunc);
    }

    const clickFunc = () =>{
        alert(refOb.current.value);
    };
    return (
        <>
            <input type="text" name="name" ref={refOb}/>
            <button onClick={attachEvent}>Attach Event</button>
            <button ref={buttonOb}>Show Value</button>
        </>
    );
}

export default RefHookExample;