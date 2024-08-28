function TodoItem({val,deleteTodo,index})
{
    return(
        <div>
            {val.name}
            <button className="hobbyBtn" onClick={function ()
                {
                    deleteTodo(index);
                }
            }>Delete</button>
            <div>
                Status:{val.status}
            </div>
        </div>

    );
}
export default TodoItem;