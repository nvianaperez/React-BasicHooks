import {useState} from "react";
import './App.css';

function App() {
  const counter =  (state) => state + 1;
  const [count,setCount] = useState(0);
  return (
    <div className="container">
      <h1>Counter useState</h1>
      <div>{count}</div>
      <button onClick={()=>setCount(counter)}>+1</button>
    </div>
  );
}

export default App;
