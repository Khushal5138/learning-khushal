import { useState } from "react";

function ObjectList(){
    
    let [name,setName] = useState("");
    let [age,setAge] = useState("");
    let [resultsAr,setResult] = useState([]);
    function nameChanged(e){
        setName(e.target.value);
    }

    function ageChanged(e){
        setAge(e.target.value);
    }

    function addStudent(name,age){
        let studentOb = new stuDetails(name,age);
        console.log(studentOb);
        let newAr = [...resultsAr,studentOb];
        setResult(newAr);
    }

    function deleteValue(indextoDelete){
        let newval = resultsAr.filter(function(val,i){
            if(indextoDelete == i) return false;
            return true;
        });
        setResult(newval);
    }

    function clearAll(){
        setResult([]);
    }

    let stuDetails = function(name,age){
        this.name = name;
        this.age = age;
        this.displayName = function(){
            return this.name;
        }
        this.displayAge = function(){
            return this.age;
        }
    }

    return(
        <div className="Student">
            <h1>Student Details Entry List</h1>
            <input type="text" className="btns" name="todoitem" value={name} onChange={nameChanged} placeholder="Enter Student Name"/>
            <input type="text" className="btns" name="todoitem" value={age} onChange={ageChanged} placeholder="Enter Student Age"/>
            <button id="green" onClick={function(){
                addStudent(name,age);
            }}>Add Student </button>
            <button className="clearbtn" id="red" onClick={clearAll}>Clear All</button>

            <div>
            {resultsAr.map(function(val,i){
               return <div>
                <h4>
                Name: {val.displayName()}  , 
                Age: {val.displayAge()} 
                </h4>
                <button className="dltdata" id="red" onClick={function(){
                        deleteValue(i);
                    }}> Delete </button>
               </div>
            })}
            </div>
        </div>
    )
}

export default ObjectList;