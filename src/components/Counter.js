import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.count);
  const showToggler = useSelector(state => state.showCount)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {dispatch({type: 'toggle'})};

  function useIncrement(){
     dispatch({type: 'increment'})
  }

  function useDecrement(){
    dispatch({type: 'decrement'})
  }
  function increase(){
    dispatch({type: 'increase',amount: 10})
 }
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggler &&     <div className={classes.value}>-- {counter} --</div>}
  
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={useIncrement}>Increment by 5</button>
        <button onClick={useDecrement}>Decrement by 5</button>
        <button onClick={increase}>Increment by 10</button>
      </div>
    </main>
  );
};

export default Counter;
