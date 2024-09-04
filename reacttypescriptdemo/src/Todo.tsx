import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./Todo.css";

interface Todo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoEntered, setTodoEntered] = useState<string>("");
  const [descriptionEntered, setDescriptionEntered] = useState<string>("");
  const [statusEntered, setStatusEntered] = useState<boolean>(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTodo, setEditTodo] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");
  const [editStatus, setEditStatus] = useState<boolean>(true);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      let response = await axios.get<Todo[]>("http://localhost:3001/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  }

  function handleTodoChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoEntered(e.target.value);
  }

  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescriptionEntered(e.target.value);
  }

  function handleStatusChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value === "true";
    setStatusEntered(value);
    if (editId !== null) {
      setEditStatus(value);
    }
  }

  async function addTodo() {
    let newTodoObject = {
      name: todoEntered,
      description: descriptionEntered,
      status: statusEntered,
    };
    try {
      let response = await axios.post<{ status: number }>("http://localhost:3001/todos", newTodoObject);
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
      let response = await axios.put<{ status: number }>(`http://localhost:3001/todos/${editId}`, updatedTodoObject);
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

  async function deleteTodo(id: string) {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      getTodos();
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  }

  async function reset() {
    try {
      let response = await axios.get<Todo[]>("http://localhost:3001/todos");
      let todosToDelete = response.data;

      for (let todo of todosToDelete) {
        await axios.delete(`http://localhost:3001/todos/${todo._id}`);
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
        onChange={(e) => (editId ? setEditTodo(e.target.value) : handleTodoChange(e))}
      />
      <select
        onChange={handleStatusChange}
        value={editId !== null ? (editStatus ? "true" : "false") : (statusEntered ? "true" : "false")}
      >
        <option value="true">Completed</option>
        <option value="false">Incomplete</option>
      </select>
      {/* <textarea
        placeholder="Enter Description"
        value={editId ? editDescription : descriptionEntered}
        onChange={(e) => (editId ? setEditDescription(e.target.value) : handleDescriptionChange(e))}
      ></textarea> */}
      <br></br>
      <br></br>
      {editId ? (
        <>
          <button onClick={updateTodo}>Update Todo</button>
          <button
            onClick={() => {
              setEditId(null);
              setEditTodo("");
              setEditDescription("");
              setEditStatus(true);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button className="action-buttons" onClick={addTodo}>Add Todo</button>
      )}
      {/* <button onClick={reset}>Reset All</button> */}

      {todos.map((todo) => (
        <div className="card" key={todo._id}>
          <div className="card-header">{todo.name}</div>
          <div className="card-content">
            <p>{todo.description}</p>
            <p className="card-status">{todo.status ? "Completed" : "Incomplete"}</p>
          </div>
          <div className="card-buttons">
            {/* <button
              onClick={() => {
                setEditId(todo._id);
                setEditTodo(todo.name);
                setEditDescription(todo.description);
                setEditStatus(todo.status);
              }}
            >
              Edit
            </button> */}
            {/* <button onClick={() => deleteTodo(todo._id)}>Delete</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
