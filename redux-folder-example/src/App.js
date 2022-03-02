import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increaseCounter, decreaseCounter, reset} from "./actions/counterActions";

function App() {

  const count = useSelector ((store) => store.counterReducer.count )
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="container">
        <h1>Counter Redux folder example</h1>
        <div>{count}</div>
        <button onClick={ () => dispatch(increaseCounter(+1))}>+1</button>
        <button onClick={ () => dispatch(increaseCounter(+5))}>+5</button>
        <button onClick={ () => dispatch(decreaseCounter(+1))}>-1</button>
        <button onClick={ () => dispatch(decreaseCounter(+5))}>-5</button>
        <button onClick={ () => dispatch(reset())}>RESET</button>
      </header>
    </div>
  );
}

export default App;
