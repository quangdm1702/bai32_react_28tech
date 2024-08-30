import { useReducer } from 'react';

const reducer = (state, action) => {
  // action: up, down, reset
  console.log(state, action)
  switch (action) {
    case 'up':
      return state + 1;
    case 'down':
      return state - 1;
    case 'reset':
      return state = 0;
    default:
      return state;
  }
}

function CounterReducer() {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);
  // dispatch gui thong tin len reducer trang thai nguoi dung click - cac action : up, down, reset  
  return (
    <>
      <div>Ket qua: {counter}</div>
      <button onClick={() => dispatch("up")}>Up</button>
      <button onClick={() => dispatch("down")}>Down</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default CounterReducer;