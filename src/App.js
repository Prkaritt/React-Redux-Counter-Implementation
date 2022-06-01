import './App.css';
import { useDispatch } from 'react-redux';
import {increment,decrement,incrementWithVaue,decrementWithValue} from './counterSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.value)
  const [inputValue, setInputValue] = useState(0);
  const buttonPressHandler = ()=>{
    if(inputValue*1 >= 0){
      dispatch(incrementWithVaue(inputValue*1))
    }
    else{
      dispatch(decrementWithValue(inputValue*1))
    }
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick = {()=>dispatch(increment())}>Increase</button>
      <button onClick = {()=>dispatch(decrement())}>Decrease</button>
      <input type="number" placeholder="Eg. 1,-1" value= {inputValue} onChange = {(e)=>setInputValue(e.target.value)}/>
      <button onClick = {()=>buttonPressHandler()}>Solve</button>
    </div>
  );
}

export default App;
