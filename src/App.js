import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Action/Counter.Action";
import Medicine from "./Container/Medicines/Medicines";
import Counter_Reducer from "./Reducers/Counter";
// import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const counter_display = useSelector((state) => state.counter);

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {counter_display}
      <button onClick={() => dispatch(increment())}>+</button>
      <Medicine />
    </div>
  );
}
