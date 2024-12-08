import { Link } from "react-router-dom";
function TodoItem({value,deleteTodo,index}){
    return(
        <div>
            {value.name}<button onClick={function(){deleteTodo(index)}}>Delete</button>
            <Link to={`${index}`}>View Todo</Link>
            <br/>
        </div>
    );
}

export default TodoItem;