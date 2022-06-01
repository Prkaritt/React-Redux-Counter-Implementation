import './App.css';
import { useDispatch } from 'react-redux';
import {increment,decrement} from './counterSlice';
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.value)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick = {()=>dispatch(increment())}>Increase</button>
      <button onClick = {()=>dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
