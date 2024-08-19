import { Component } from "react";
import ClassBasedCounterForm from "./ClassBasedCounterForm";

class ClassBasedCounter extends Component{
    constructor(){
        super();
        this.state={count:0,title:"some title"};
    }
    increase=()=>{
        this.setState((prevState,props)=>{
            return{
                count: prevState.count+1,
            };
        });
    };
    decrease=()=>{
        this.setState((prevState,props)=>{
            return{
                count: prevState.count-1,
            };
        });
    };
    render(){
        return(
            <div>
                Counter={this.state.count}<br/>
                <ClassBasedCounterForm increase={this.increase} decrease={this.decrease}/>
                title={this.state.title}
            </div>
        );
    }
}
export default ClassBasedCounter;