function Todoforms({todoEntered, changeTodoEntered, setStatusEntered, addTodo, reset})
{
    return(
        <>
            <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
            <select onChange={function(e)
                {
                    setStatusEntered(e.target.value);
                }
            }>
                <option value="completed">Completed</option>
                <option value="incompleted">Incomplete</option>
            </select>
            <button className="Hobby" onClick={addTodo}>add Item</button>
            <button className="Hobby" onClick={reset}>Reset All</button>
        </>
    );

}
export default Todoforms;