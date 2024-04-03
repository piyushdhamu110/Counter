import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 10;

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 10) {
      setCounter((prevCounter) => prevCounter + 2);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
    } else {
      alert("what are you doing!");
    }
  };
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("what are you doing!");
    }
  };
  return (
    <>
      <h1>Piyush Jangra</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={subValue}>Remove value:{counter}</button>

      <p>Value:{counter}</p>
    </>
  );
}

export default App;
