import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult((prevResult) => prevResult + Number(input));
    setInput("");
  };

  const handleSubtract = () => {
    setResult((prevResult) => prevResult - Number(input));
    setInput("");
  };

  const handleMultiply = () => {
    setResult((prevResult) => prevResult * Number(input));
    setInput("");
  };

  const handleDivide = () => {
    setResult((prevResult) => prevResult / Number(input));
    setInput("");
  };

  const handleResetInput = () => {
    setInput("");
  };

  const handleResetResult = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <div className="result">{result}</div>
      <input type="number" value={input} onChange={handleInputChange} />
      <div>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleSubtract}>subtract</button>
        <button onClick={handleMultiply}>multiply</button>
        <button onClick={handleDivide}>divide</button>
        <button className="btn" onClick={handleResetInput}>
          reset input
        </button>
        <button className="btn" onClick={handleResetResult}>
          reset result
        </button>
      </div>
    </div>
  );
};

export default Calculator;
