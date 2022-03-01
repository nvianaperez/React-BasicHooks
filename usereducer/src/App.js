import CounterUseReducer from "./CounterUseReducer";

export default function App() {
  return (
    <>
      <CounterUseReducer />
      <CounterUseReducer />
    </>
  );
}



/******** USEREDUCER **********/

// import { useReducer } from "react";
// import './App.css';

// function App() {

//   const [count, dispatch] = useReducer ( (state, amount) => state + amount, 0 );

//   return (
//     <div className="container">
//       <h1>Counter useReducer</h1>
//       <div>{count}</div>
//       <button onClick={ ()=> dispatch(+1) }>+1</button>
//       <button onClick={ ()=> dispatch(-1) }>-1</button>
//     </div>
//   );
// }

// export default App;
