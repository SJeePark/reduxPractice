import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const result = useSelector(state=>state.result);
  const dispatch = useDispatch()
  let id = useSelector(state=>state.id)
  let password= useSelector(state => state.password)

  const sum = () => {
    dispatch({type: "INCREMENT", payload: {num:5}})  
  };
  // type=액션의 이름(ex: 증가하기, 아이템 갖고오기)
  // payload = 필요한 정보 전달

  const login=()=>{
    dispatch({type:"LOGIN", payload:{id:"noona", password:"1234"}})
  }

  const sub = () => {
    dispatch({type: "subtraction"})
  }

  return (
    <div className="App">
      <h1>{id} {password}</h1>
      <button onClick={sum}>+</button>
      <button onClick={sub}>-</button>
      <p>{result}</p>
      <button onClick={login}>login</button>
      <Box />
    </div>
  );
}

export default App;