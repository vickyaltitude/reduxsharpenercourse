import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterSliceAction } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter.count);
  const showToggler = useSelector(state => state.counter.showCount)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    
    dispatch(counterSliceAction.showToggler())
  
  };

  function useIncrement(){
     dispatch(counterSliceAction.increment())
  }

  function useDecrement(){
    dispatch(counterSliceAction.decrement())
  }
  function increase(){
    dispatch(counterSliceAction.increase(10))
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
