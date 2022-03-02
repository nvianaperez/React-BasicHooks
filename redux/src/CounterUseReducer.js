/******** USEREDUCER AMB PATRONS **********/

import { useReducer } from "react";
import './App.css';
import { counter, increment, reset } from "./counter";

export default function CounterUseReducer() {

  const [count, dispatch] = useReducer ( counter, 0);

  return (
    <div className="container">
      <h1>Counter useReducer</h1>
      <div>{count}</div>
      <button onClick={ ()=> dispatch(increment(+1)) }>+1</button>
      <button onClick={ ()=> dispatch(increment(-1)) }>-1</button>
      <button onClick={ ()=> dispatch(reset()) }>reset</button>
    </div>
  );
}