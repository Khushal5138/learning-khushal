import { useParams } from "react-router-dom";

function TodoDetailsEdit()
{
    const [todoData,setTodoData]=useState({});

    const options=[{title:"completed"},{title:"incomplete"}];
    const {id} =useParams();
    //continue from sirs photos updated on gmail.
}