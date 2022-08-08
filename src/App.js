import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Action/Counter.Action";
import Medicine from "./Container/Medicines/Medicines";
import Promise_example from "./Container/Promise_Example/Promise_example";
import ThemeContext, { ThemeProvider } from "./Context/ThemeContext";
import Counter_Reducer from "./Reducers/Counter";
import Signup from "./Container/Authentication/Auth";

// import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const counter_display = useSelector((state) => state.counter);

  return (
    <ThemeProvider>
      <div >
        <button onClick={() => dispatch(decrement())}>-</button>
        {counter_display}
        <button onClick={() => dispatch(increment())}>+</button>
        <Medicine />
        <Promise_example />
        <Signup />
      </div>
    </ThemeProvider>
  );
}
