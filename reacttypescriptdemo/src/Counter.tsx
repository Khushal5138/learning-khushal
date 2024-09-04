import React, { useState } from "react";
import './Counter.css';

const Counter: React.FC = () => {
  const [stateCount, setStateCount] = useState<number>(0);

  function increase() {
    setStateCount(stateCount + 1);
  }

  function decrease() {
    setStateCount(stateCount - 1);
  }

  function reset() {
    setStateCount(0);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <div className="counter-buttons">
        <button className="counter-button" onClick={increase}>Increase</button>
        <button className="counter-button" onClick={decrease}>Decrease</button>
        <button className="counter-button" onClick={reset}>Reset</button>
      </div>
      <h1 className="counter-value">{stateCount}</h1>
    </div>
  );
};

export default Counter;
