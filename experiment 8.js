// App.js

import React, { useState } from "react";

function App() {
  // State variable for counter
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter Application</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={increment} style={{ margin: "10px" }}>
        Increment
      </button>

      <button onClick={decrement} style={{ margin: "10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ margin: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;