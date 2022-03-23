import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index"


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.val);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseCounterHandler = (amount) => {
    dispatch(counterActions.increase(amount));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementCounterHandler}>Increment</button>
      <button onClick={() => increaseCounterHandler(5)}>Increse by five</button>
      <button onClick={decrementCounterHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
