import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);

  const sum = () => {
    setResult(result + 1);
  };

  return (
    <div className="App">
      <button onClick={sum}>+</button>
      <p>{result}</p>
    </div>
  );
}

export default App;