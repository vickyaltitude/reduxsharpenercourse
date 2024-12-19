import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.count)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  function useIncrement(){
     dispatch({type: 'increment'})
  }

  function useDecrement(){
    dispatch({type: 'decrement'})
  }
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={useIncrement}>Increment by 5</button>
        <button onClick={useDecrement}>Decrement by 5</button>
      </div>
    </main>
  );
};

export default Counter;
