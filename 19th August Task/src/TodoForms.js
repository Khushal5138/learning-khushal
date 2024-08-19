function TodoForms({todoEntered,changeTodoEntered,addTodo,setStatusEntered}){
    return(
        <>
            <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
            <select onChange={function(e){
                setStatusEntered(e.target.value);
               }}>
               <option value="completed">Completed</option>
               <option value="incomplete">Not Completed</option>
            </select>
            <button onClick={addTodo}>Add todo</button>
        </>
    )
}

export default TodoForms;