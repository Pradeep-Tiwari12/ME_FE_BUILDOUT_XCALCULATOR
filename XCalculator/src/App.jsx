import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    setExpression((prev) => prev + e.target.value);
  }

  function handleClear() {
    setExpression("");
    setResult("");
  }

  function handleEqual() {
    if (expression === "") {
      setResult("Error");
      return;
    }else{
const final = eval(expression)
setResult(final)
    }
  }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <input
        type="text"
        value={expression}
        readOnly
      />

      <div>
        {result}
      </div>

      <div className="buttons">
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button>
<br />
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
<br />
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="*" onClick={handleClick}>*</button>
<br />
        <button value="C" onClick={handleClear}>C</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="/" onClick={handleClick}>/</button>
        <button onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}

export default App;