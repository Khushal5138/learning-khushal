import { useState } from "react";

function TodoDetailsEdit(){
    const [todoData,setTodoData]=useState({});

    const options=[{title:"completed"},{title:"incomplete"}];

    const{id}=useParams();
    useEffect(function(){
        axios.get(`/todos/${id}`).then(function(response){
            setTodoData(response.data);
        });
    },[]);
    function editTodo(e){
        e.preventDefault();
        let todoModifiedOb={
            name:e.target.todoitem.value,
            status:e.target.status.value,
        }

        console.log(todoModifiedOb);
    }

    return(
        <>
            <form onSubmit={editTodo}>
                <input
                type="text"
                name=
            </form>
        </>
    )
}