
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
import {
    Container,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    Paper,
    Grid,
    FormControl,
    InputLabel,
    TextareaAutosize,
} from "@mui/material";
import { Add, Edit, Delete, Cancel } from "@mui/icons-material";
import "./Todo.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [todoEntered, setTodoEntered] = useState("");
    const [descriptionEntered, setDescriptionEntered] = useState("");
    const [statusEntered, setStatusEntered] = useState(true);
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editStatus, setEditStatus] = useState(true);

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
        setStatusEntered(e.target.value === "true");
        if (editId !== null) {
            setEditStatus(e.target.value === "true");
        }
    }

    async function addTodo() {
        let newTodoObject = {
            name: todoEntered,
            description: descriptionEntered,
            status: statusEntered,
        };
        try {
            let response = await axios.post("todos", newTodoObject);
            if (response.data.status === 1) {
                getTodos();
                setTodoEntered("");
                setDescriptionEntered("");
                setStatusEntered(true);
            }
        } catch (err) {
            console.error("Error adding todo", err);
        }
    }

    async function updateTodo() {
        let updatedTodoObject = {
            name: editTodo,
            description: editDescription,
            status: editStatus,
        };
        try {
            let response = await axios.put(`todos/${editId}`, updatedTodoObject);
            if (response.data.status === 1) {
                getTodos();
                setEditId(null);
                setEditTodo("");
                setEditDescription("");
                setEditStatus(true);
            }
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
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Todos
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            fullWidth
                            label="Enter Todo"
                            value={editId ? editTodo : todoEntered}
                            onChange={(e) => (editId ? setEditTodo(e.target.value) : handleTodoChange(e))}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={editId !== null ? (editStatus ? "true" : "false") : (statusEntered ? "true" : "false")}
                                onChange={handleStatusChange}
                                variant="outlined"
                            >
                                <MenuItem value="true">Completed</MenuItem>
                                <MenuItem value="false">Incomplete</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            minRows={4}
                            placeholder="Enter Description"
                            style={{ width: "100%" }}
                            value={editId ? editDescription : descriptionEntered}
                            onChange={(e) => (editId ? setEditDescription(e.target.value) : handleDescriptionChange(e))}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {editId ? (
                            <>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Edit />}
                                    onClick={updateTodo}
                                >
                                    Update Todo
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    startIcon={<Cancel />}
                                    onClick={() => {
                                        setEditId(null);
                                        setEditTodo("");
                                        setEditDescription("");
                                        setEditStatus(true);
                                    }}
                                    sx={{ marginLeft: 2 }}
                                >
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Add />}
                                onClick={addTodo}
                            >
                                Add Todo
                            </Button>
                        )}
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<Delete />}
                            onClick={reset}
                            sx={{ marginLeft: 2 }}
                        >
                            Reset All
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {todos.map((todo) => (
                <Paper key={todo._id} elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h6">{todo.name}</Typography>
                    <Typography>Description: {todo.description}</Typography>
                    <Typography>Status: {todo.status ? "Completed" : "Incomplete"}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => {
                            setEditId(todo._id);
                            setEditTodo(todo.name);
                            setEditDescription(todo.description);
                            setEditStatus(todo.status);
                        }}
                        sx={{ marginRight: 2 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => deleteTodo(todo._id)}
                    >
                        Delete
                    </Button>
                </Paper>
            ))}
        </Container>
    );
}

export default Todo;

