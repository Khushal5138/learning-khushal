// import {useState , useEffect} from "react";
// import axios from "axios";
// import Todoforms from "./Todoforms";
// import TodoList from "./TodoList";

// function Todo()
// {
//     let todosInitialValue=[{name: "Default Name",status: "Default Status"}];
//     let [todos,setTodos]=useState(todosInitialValue);
//     let [todoEntered, setTodoEntered]=useState("Enter Hobby");
//     let [statusEntered,setStatusEntered]=useState("Default Status");
//     useEffect(function()
//     {
//         console.log("function called on load");
//         getTodos();
//     },[]);

//     async function getTodos()
//     {
//         await axios
//         .get("todos" , { headers : {} })
//         .then(function(response)
//         {
//             console.log(response.data);
//             setTodos(response.data);
//         })
//         .catch(function(error)
//         {
//             console.log(error);
//         })
//     }
//     function changeTodoEntered(e)
//     {
//         setTodoEntered(e.target.value);
//     }
//     function addTodo()
//     {
//         let newTodoObject={name: todoEntered, status:statusEntered};
//         axios
//         .post("/todos",newTodoObject)
//         .then(function(response)
//         {
//             console.log(response.data);
//             if(response.data.status = 1)
//             {
//                 getTodos();
//             }
//         })
//         .catch(function(err)
//         {
//             console.log(err);
//         })
//         let newTodoArr=[...todos,todoEntered]//3 dots means the array is copied and we can then add new arrays
//         setTodos(newTodoArr);

//     }
//     function deleteTodo(index)
//     {
//         axios
//             .delete(`/todos/${index}`)
//             .then(function(response)
//             {
//                 console.log(response);
//                 getTodos();
//             })
//             .catch(function(error)
//             {
//                 console.log(error);
//             });
//         let newTodos=todos.filter(function (i)
//         {
//             if(index == i)
//             {
//                 return false;
//             }
//             else
//             {
//                 return true;
//             }
//         });
//     setTodos(newTodos);
//     }
//     function reset()
//     {
//         let newTodos=[];
//         setTodos(newTodos);
//     }
//     // return(
//     //     <div className="Hobbies">
//     //         <h1> Hobbies </h1>
//     //         <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
//     //         <select onChange={function(e)
//     //             {
//     //                 setStatusEntered(e.target.value);
//     //             }
//     //         }>
//     //             <option value="completed">Completed</option>
//     //             <option value="incompleted">Incomplete</option>
//     //         </select>
//     //         <button className="Hobby" onClick={addTodo}>add Item</button>
//     //         <button className="Hobby" onClick={reset}>Reset All</button>
//     //         {
//     //             // todos.map(function(val,index)
//     //             // {
//     //             //     return(
//     //             //         <div>
//     //             //             {val.name}
//     //             //             <button className="hobbyBtn" onClick={function ()
//     //             //                 {
//     //             //                     deleteTodo(index);
//     //             //                 }
//     //             //             }>Delete</button>
//     //             //             <div>
//     //             //                 Status:{val.status}
//     //             //             </div>
//     //             //         </div>

//     //             //     );
//     //             // })
//     //         }
//     //     </div>
//     // );
//     return(
//         <div>
//             <Todoforms
//                 todoEntered={todoEntered}
//                 changeTodoEntered={changeTodoEntered}
//                 setStatusEntered={setStatusEntered}
//                 addTodo={addTodo}
//                 reset={reset} />
    
//         <TodoList todos={todos} deleteTodo={deleteTodo} />
//         </div>
//     )

// }
// export default Todo;






// import { useState, useEffect } from "react";
// import axios from "axios";

// function Todo() {

//     let [todos, setTodos] = useState([]);
//     let [todoEntered, setTodoEntered] = useState("");
//     let [statusEntered, setStatusEntered] = useState(true);

//     useEffect(() => {
//         console.log("Fetching todos on load");
//         getTodos();
//     }, []);

//     async function getTodos() {
//         try {
//             let response = await axios.get("todos");
//             console.log("Todos fetched:", response.data);
//             setTodos(response.data);
//         } catch (error) {
//             console.error("Error fetching todos", error);
//         }
//     }

//     function handleTodoChange(e) {
//         setTodoEntered(e.target.value);
//     }

//     function handleStatusChange(e) {

//         setStatusEntered(e.target.value === true);
//     }

//     async function addTodo() {
//         let newTodoObject = { name: todoEntered, status: statusEntered };
//         try {
//             let response = await axios.post("todos", newTodoObject);
//             console.log("Todo added:", response.data);
//             if (response.data.status === 1) {
//                 getTodos(); 
//             }
//         } catch (err) {
//             console.error("Error adding todo", err);
//         }
//     }

//     async function deleteTodo(id) {
//         try {
//             let response = await axios.delete(`todos/${id}`);
//             console.log("Todo deleted:", response.data);
//             getTodos();
//         } catch (error) {
//             console.error("Error deleting todo", error);
//         }
//     }

//     async function reset() {
//         try {
//             let response = await axios.get("todos");
//             let todosToDelete = response.data;

//             for (let todo of todosToDelete) {
//                 await axios.delete(`todos/${todo._id}`);
//             }
//             console.log("All todos deleted");
//             setTodos([]);
//         } catch (error) {
//             console.error("Error resetting todos", error);
//         }
//     }

//     return (
//         <div className="Todos">
//             <h1>Todos</h1>
//             <input
//                 type="text"
//                 placeholder="Enter Todo"
//                 value={todoEntered}
//                 onChange={handleTodoChange}
//             />
//             <select onChange={handleStatusChange}>
//                 <option value="true">Completed</option>
//                 <option value="false">Incomplete</option>
//             </select>
//             <button onClick={addTodo}>Add Todo</button>
//             <button onClick={reset}>Reset All</button>

//             {todos.map((todo) => (
//                 <div key={todo._id}>
//                     <p>{todo.name}</p>
//                     <p>Status: {todo.status ? "Completed" : "Incomplete"}</p>
//                     <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Todo;






// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Todo.css";

// function Todo() {
//     let [todos, setTodos] = useState([]);
//     let [todoEntered, setTodoEntered] = useState("");
//     let [statusEntered, setStatusEntered] = useState(true);
//     let [editId, setEditId] = useState(null);
//     let [editTodo, setEditTodo] = useState("");
//     let [editStatus, setEditStatus] = useState(true);

//     useEffect(() => {
//         getTodos();
//     }, []);

//     async function getTodos() {
//         try {
//             let response = await axios.get("todos");
//             setTodos(response.data);
//         } catch (error) {
//             console.error("Error fetching todos", error);
//         }
//     }

//     function handleTodoChange(e) {
//         setTodoEntered(e.target.value);
//     }

//     function handleStatusChange(e) {
//         setStatusEntered(e.target.value === "true");
//         if (editId !== null) {
//             setEditStatus(e.target.value === "true");
//         }
//     }

//     async function addTodo() {
//         let newTodoObject = { name: todoEntered, status: statusEntered };
//         try {
//             let response = await axios.post("todos", newTodoObject);
//             if (response.data.status === 1) {
//                 getTodos();
//                 setTodoEntered("");
//                 setStatusEntered(true);
//             }
//             getTodos();
//         } catch (err) {
//             console.error("Error adding todo", err);
//         }
//     }

//     async function updateTodo() {
//         let updatedTodoObject = { name: editTodo, status: editStatus };
//         try {
//             let response = await axios.put(`todos/${editId}`, updatedTodoObject);
//             if (response.data.status === 1) {
//                 getTodos();
//                 setEditId(null);
//                 setEditTodo("");
//                 setEditStatus(true);
//             }
//             getTodos();
//         } catch (err) {
//             console.error("Error updating todo", err);
//         }
//     }

//     async function deleteTodo(id) {
//         try {
//             await axios.delete(`todos/${id}`);
//             getTodos();
//         } catch (error) {
//             console.error("Error deleting todo", error);
//         }
//     }

//     async function reset() {
//         try {
//             let response = await axios.get("todos");
//             let todosToDelete = response.data;

//             for (let todo of todosToDelete) {
//                 await axios.delete(`todos/${todo._id}`);
//             }
//             setTodos([]);
//         } catch (error) {
//             console.error("Error resetting todos", error);
//         }
//     }

//     return (
//         <div className="Todos">
//             <h1>Todos</h1>
//             <input
//                 type="text"
//                 placeholder="Enter Todo"
//                 value={editId ? editTodo : todoEntered}
//                 onChange={e => editId ? setEditTodo(e.target.value) : handleTodoChange(e)}
//             />
//             <select 
//                 onChange={handleStatusChange}
//                 value={editId !== null ? (editStatus ? "true" : "false") : (statusEntered ? "true" : "false")}
//             >
//                 <option value="true">Completed</option>
//                 <option value="false">Incomplete</option>
//             </select>
//             {editId ? (
//                 <>
//                     <button onClick={updateTodo}>Update Todo</button>
//                     <button onClick={() => {
//                         setEditId(null);
//                         setEditTodo("");
//                         setEditStatus(true);
//                     }}>Cancel</button>
//                 </>
//             ) : (
//                 <button onClick={addTodo}>Add Todo</button>
//             )}
//             <button onClick={reset}>Reset All</button>

//             {todos.map((todo) => (
//                 <div key={todo._id}>
//                     <p>{todo.name}</p>
//                     <p>Status: {todo.status ? "Completed" : "Incomplete"}</p>
//                     <button onClick={() => {
//                         setEditId(todo._id);
//                         setEditTodo(todo.name);
//                         setEditStatus(todo.status);
//                     }}>Edit</button>
//                     <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Todo;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Todo.css";

// function Todo() {
//     let [todos, setTodos] = useState([]);
//     let [todoEntered, setTodoEntered] = useState("");
//     let [descriptionEntered, setDescriptionEntered] = useState(""); 
//     let [statusEntered, setStatusEntered] = useState(true);
//     let [editId, setEditId] = useState(null);
//     let [editTodo, setEditTodo] = useState("");
//     let [editDescription, setEditDescription] = useState("");
//     let [editStatus, setEditStatus] = useState(true);

//     useEffect(() => {
//         getTodos();
//     }, []);

//     async function getTodos() {
//         try {
//             let response = await axios.get("todos");
//             setTodos(response.data);
//         } catch (error) {
//             console.error("Error fetching todos", error);
//         }
//     }

//     function handleTodoChange(e) {
//         setTodoEntered(e.target.value);
//     }

//     function handleDescriptionChange(e) {
//         setDescriptionEntered(e.target.value);
//     }

//     function handleStatusChange(e) {
//         setStatusEntered(e.target.value === true);
//         if (editId !== null) {
//             setEditStatus(e.target.value === true);
//         }
//     }

//     async function addTodo() {
//         let newTodoObject = { name: todoEntered, description: descriptionEntered, status: statusEntered }; 
//         try {
//             let response = await axios.post("todos", newTodoObject);
//             if (response.data.status === 1) {
//                 getTodos();
//                 setTodoEntered("");
//                 setDescriptionEntered(""); 
//                 setStatusEntered(true);
//             }
//             getTodos();
//         } catch (err) {
//             console.error("Error adding todo", err);
//         }
//     }

//     async function updateTodo() {
//         let updatedTodoObject = { name: editTodo, description: editDescription, status: editStatus }; // Include description
//         try {
//             let response = await axios.put(`todos/${editId}`, updatedTodoObject);
//             if (response.data.status === 1) {
//                 getTodos();
//                 setEditId(null);
//                 setEditTodo("");
//                 setEditDescription(""); 
//                 setEditStatus(true);
//             }
//             getTodos();
//         } catch (err) {
//             console.error("Error updating todo", err);
//         }
//     }

//     async function deleteTodo(id) {
//         try {
//             await axios.delete(`todos/${id}`);
//             getTodos();
//         } catch (error) {
//             console.error("Error deleting todo", error);
//         }
//     }

//     async function reset() {
//         try {
//             let response = await axios.get("todos");
//             let todosToDelete = response.data;

//             for (let todo of todosToDelete) {
//                 await axios.delete(`todos/${todo._id}`);
//             }
//             setTodos([]);
//         } catch (error) {
//             console.error("Error resetting todos", error);
//         }
//     }

//     return (
//         <div className="Todos">
//             <h1>Todos</h1>
//             <input
//                 type="text"
//                 placeholder="Enter Todo"
//                 value={editId ? editTodo : todoEntered}
//                 onChange={e => editId ? setEditTodo(e.target.value) : handleTodoChange(e)}
//             />
//             <select 
//                 onChange={handleStatusChange}
//                 value={editId !== null ? (editStatus ? "true" : "false") : (statusEntered ? "true" : "false")}
//             >
//                 <option value="true">Completed</option>
//                 <option value="false">Incomplete</option>
//             </select>
//             <textarea
//                 placeholder="Enter Description" width = "1000px" height="1000px"
//                 value={editId ? editDescription : descriptionEntered}
//                 onChange={e => editId ? setEditDescription(e.target.value) : handleDescriptionChange(e)}
//             ></textarea>
//             <br></br>
//             <br></br>
//             {editId ? (
//                 <>
//                     <button onClick={updateTodo}>Update Todo</button>
//                     <button onClick={() => {
//                         setEditId(null);
//                         setEditTodo("");
//                         setEditDescription(""); 
//                         setEditStatus(true);
//                     }}>Cancel</button>
//                 </>
//             ) : (
//                 <button onClick={addTodo}>Add Todo</button>
//             )}
//             <button onClick={reset}>Reset All</button>

//             {todos.map((todo) => (
//                 <div key={todo._id}>
//                     <p>{todo.name}</p>
//                     <p>Description: {todo.description}</p> 
//                     <p>Status: {todo.status ? "Completed" : "Incomplete"}</p>
//                     <button onClick={() => {
//                         setEditId(todo._id);
//                         setEditTodo(todo.name);
//                         setEditDescription(todo.description); 
//                         setEditStatus(todo.status);
//                     }}>Edit</button>
//                     <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Todo;



import { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";

function Todo() {
    let [todos, setTodos] = useState([]);
    let [todoEntered, setTodoEntered] = useState("");
    let [descriptionEntered, setDescriptionEntered] = useState(""); 
    let [statusEntered, setStatusEntered] = useState(true);
    let [editId, setEditId] = useState(null);
    let [editTodo, setEditTodo] = useState("");
    let [editDescription, setEditDescription] = useState("");
    let [editStatus, setEditStatus] = useState(true);

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        try {
            let response = await axios.get("todos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos", error);
        }
    }

    function handleTodoChange(e) {
        setTodoEntered(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescriptionEntered(e.target.value);
    }

    function handleStatusChange(e) {
        const value = e.target.value === "true";
        setStatusEntered(value);
        if (editId !== null) {
            setEditStatus(value);
        }
    }

    async function addTodo() {
        let newTodoObject = { name: todoEntered, description: descriptionEntered, status: statusEntered }; 
        try {
            let response = await axios.post("todos", newTodoObject);
            if (response.data.status === 1) {
                getTodos();
                setTodoEntered("");
                setDescriptionEntered(""); 
                setStatusEntered(true);
            }
            getTodos();
        } catch (err) {
            console.error("Error adding todo", err);
        }
    }

    async function updateTodo() {
        let updatedTodoObject = { name: editTodo, description: editDescription, status: editStatus };
        try {
            let response = await axios.put(`todos/${editId}`, updatedTodoObject);
            if (response.data.status === 1) {
                getTodos();
                setEditId(null);
                setEditTodo("");
                setEditDescription(""); 
                setEditStatus(true);
            }
            getTodos();
        } catch (err) {
            console.error("Error updating todo", err);
        }
    }

    async function deleteTodo(id) {
        try {
            await axios.delete(`todos/${id}`);
            getTodos();
        } catch (error) {
            console.error("Error deleting todo", error);
        }
    }

    async function reset() {
        try {
            let response = await axios.get("todos");
            let todosToDelete = response.data;

            for (let todo of todosToDelete) {
                await axios.delete(`todos/${todo._id}`);
            }
            setTodos([]);
        } catch (error) {
            console.error("Error resetting todos", error);
        }
    }

    return (
        <div className="Todos">
            <h1>Todos</h1>
            <input
                type="text"
                placeholder="Enter Todo"
                value={editId ? editTodo : todoEntered}
                onChange={e => editId ? setEditTodo(e.target.value) : handleTodoChange(e)}
            />
            <select 
                onChange={handleStatusChange}
                value={editId !== null ? (editStatus ? "true" : "false") : (statusEntered ? "true" : "false")}
            >
                <option value="true">Completed</option>
                <option value="false">Incomplete</option>
            </select>
            <textarea
                placeholder="Enter Description"
                value={editId ? editDescription : descriptionEntered}
                onChange={e => editId ? setEditDescription(e.target.value) : handleDescriptionChange(e)}
            ></textarea>
            <br></br>
            <br></br>
            {editId ? (
                <>
                    <button onClick={updateTodo}>Update Todo</button>
                    <button onClick={() => {
                        setEditId(null);
                        setEditTodo("");
                        setEditDescription(""); 
                        setEditStatus(true);
                    }}>Cancel</button>
                </>
            ) : (
                <button onClick={addTodo}>Add Todo</button>
            )}
            <button onClick={reset}>Reset All</button>

            {todos.map((todo) => (
                <div key={todo._id}>
                    <p>{todo.name}</p>
                    <p>Description: {todo.description}</p> 
                    <p>Status: {todo.status ? "Completed" : "Incomplete"}</p>
                    <button onClick={() => {
                        setEditId(todo._id);
                        setEditTodo(todo.name);
                        setEditDescription(todo.description); 
                        setEditStatus(todo.status);
                    }}>Edit</button>
                    <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Todo;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//     Container,
//     Typography,
//     TextField,
//     Select,
//     MenuItem,
//     Button,
//     Paper,
//     Grid,
//     FormControl,
//     InputLabel,
//     TextareaAutosize,
// } from "@mui/material";
// import { Add, Edit, Delete, Cancel } from "@mui/icons-material";
// import "./Todo.css";

// function Todo() {
//     const [todos, setTodos] = useState([]);
//     const [todoEntered, setTodoEntered] = useState("");
//     const [descriptionEntered, setDescriptionEntered] = useState("");
//     const [statusEntered, setStatusEntered] = useState(true);
//     const [editId, setEditId] = useState(null);
//     const [editTodo, setEditTodo] = useState("");
//     const [editDescription, setEditDescription] = useState("");
//     const [editStatus, setEditStatus] = useState(true);

//     useEffect(() => {
//         getTodos();
//     }, []);

//     async function getTodos() {
//         try {
//             let response = await axios.get("todos");
//             setTodos(response.data);
//         } catch (error) {
//             console.error("Error fetching todos", error);
//         }
//     }

//     function handleTodoChange(e) {
//         setTodoEntered(e.target.value);
//     }

//     function handleDescriptionChange(e) {
//         setDescriptionEntered(e.target.value);
//     }

//     function handleStatusChange(e) {
//         setStatusEntered(e.target.value === "true");
//         if (editId !== null) {
//             setEditStatus(e.target.value === "true");
//         }
//     }

//     async function addTodo() {
//         let newTodoObject = {
//             name: todoEntered,
//             description: descriptionEntered,
//             status: statusEntered,
//         };
//         try {
//             let response = await axios.post("todos", newTodoObject);
//             if (response.data.status === 1) {
//                 getTodos();
//                 setTodoEntered("");
//                 setDescriptionEntered("");
//                 setStatusEntered(true);
//             }
//         } catch (err) {
//             console.error("Error adding todo", err);
//         }
//     }

//     async function updateTodo() {
//         let updatedTodoObject = {
//             name: editTodo,
//             description: editDescription,
//             status: editStatus,
//         };
//         try {
//             let response = await axios.put(`todos/${editId}`, updatedTodoObject);
//             if (response.data.status === 1) {
//                 getTodos();
//                 setEditId(null);
//                 setEditTodo("");
//                 setEditDescription("");
//                 setEditStatus(true);
//             }
//         } catch (err) {
//             console.error("Error updating todo", err);
//         }
//     }

//     async function deleteTodo(id) {
//         try {
//             await axios.delete(`todos/${id}`);
//             getTodos();
//         } catch (error) {
//             console.error("Error deleting todo", error);
//         }
//     }

//     async function reset() {
//         try {
//             let response = await axios.get("todos");
//             let todosToDelete = response.data;

//             for (let todo of todosToDelete) {
//                 await axios.delete(`todos/${todo._id}`);
//             }
//             setTodos([]);
//         } catch (error) {
//             console.error("Error resetting todos", error);
//         }
//     }

//     return (
//         <Container>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Todos
//             </Typography>
//             <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} sm={8}>
//                         <TextField
//                             fullWidth
//                             label="Enter Todo"
//                             value={editId ? editTodo : todoEntered}
//                             onChange={(e) => (editId ? setEditTodo(e.target.value) : handleTodoChange(e))}
//                             variant="outlined"
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={4}>
//                         <FormControl fullWidth>
//                             <InputLabel>Status</InputLabel>
//                             <Select
//                                 value={editId !== null ? (editStatus ? "true" : "false") : (statusEntered ? "true" : "false")}
//                                 onChange={handleStatusChange}
//                                 variant="outlined"
//                             >
//                                 <MenuItem value="true">Completed</MenuItem>
//                                 <MenuItem value="false">Incomplete</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextareaAutosize
//                             minRows={4}
//                             placeholder="Enter Description"
//                             style={{ width: "100%" }}
//                             value={editId ? editDescription : descriptionEntered}
//                             onChange={(e) => (editId ? setEditDescription(e.target.value) : handleDescriptionChange(e))}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         {editId ? (
//                             <>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     startIcon={<Edit />}
//                                     onClick={updateTodo}
//                                 >
//                                     Update Todo
//                                 </Button>
//                                 <Button
//                                     variant="outlined"
//                                     color="secondary"
//                                     startIcon={<Cancel />}
//                                     onClick={() => {
//                                         setEditId(null);
//                                         setEditTodo("");
//                                         setEditDescription("");
//                                         setEditStatus(true);
//                                     }}
//                                     sx={{ marginLeft: 2 }}
//                                 >
//                                     Cancel
//                                 </Button>
//                             </>
//                         ) : (
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 startIcon={<Add />}
//                                 onClick={addTodo}
//                             >
//                                 Add Todo
//                             </Button>
//                         )}
//                         <Button
//                             variant="outlined"
//                             color="error"
//                             startIcon={<Delete />}
//                             onClick={reset}
//                             sx={{ marginLeft: 2 }}
//                         >
//                             Reset All
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </Paper>

//             {todos.map((todo) => (
//                 <Paper key={todo._id} elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
//                     <Typography variant="h6">{todo.name}</Typography>
//                     <Typography>Description: {todo.description}</Typography>
//                     <Typography>Status: {todo.status ? "Completed" : "Incomplete"}</Typography>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         startIcon={<Edit />}
//                         onClick={() => {
//                             setEditId(todo._id);
//                             setEditTodo(todo.name);
//                             setEditDescription(todo.description);
//                             setEditStatus(todo.status);
//                         }}
//                         sx={{ marginRight: 2 }}
//                     >
//                         Edit
//                     </Button>
//                     <Button
//                         variant="outlined"
//                         color="error"
//                         startIcon={<Delete />}
//                         onClick={() => deleteTodo(todo._id)}
//                     >
//                         Delete
//                     </Button>
//                 </Paper>
//             ))}
//         </Container>
//     );
// }

// export default Todo;
