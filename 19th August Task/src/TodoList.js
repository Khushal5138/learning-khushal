import TodoItem from "./TodoItem";
function TodoList({todos, deleteToDo}){
    return(
        <>
            {
                todos.map(function(value,index){
                  return <TodoItem value={value} deleteToDo={deleteToDo} index={index}/>;
                })
            }
            
        </>
    );
}
export default TodoList;