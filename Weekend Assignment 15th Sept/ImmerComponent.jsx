import React, { useState } from "react";
import produce from "immer";

// Component to demonstrate Immer usage
const ImmerComponent = () => {
  const baseState = [
    { todo: "Learn typescript", done: true },
    { todo: "Try immer", done: false },
  ];

  const [todos, setTodos] = useState(baseState);

  const updateTodos = () => {
    const nextState = produce(todos, (draftState) => {
      draftState.push({ todo: "Tweet about it", done: false });
      draftState[1].done = true;
    });
    setTodos(nextState);
  };

  return (
    <div>
      <h2>Todos List</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.todo} - {item.done ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
      <button onClick={updateTodos}>Update Todos</button>
    </div>
  );
};

// Component to demonstrate Props and State
const PropsDemo = ({ greeting }) => {
  const [isShow, setIsShow] = useState(true);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      {isShow && <h1>{greeting}</h1>}
      <button onClick={toggleShow}>Toggle Show</button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <h1>React with Immer, Props, and State</h1>
      <ImmerComponent />
      <PropsDemo greeting="Welcome to React" />
    </div>
  );
};

export default App;
