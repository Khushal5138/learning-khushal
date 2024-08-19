import { Component } from "react";

class ClassBasedCounterForm extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                <button onClick={this.props.increase}>Increase</button>
                <button onClick={this.props.decrease}>Decrease</button>
            </div>
        );
    }
}
export default ClassBasedCounterForm;