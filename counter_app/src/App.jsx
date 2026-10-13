
import { useState } from 'react'
import './App.css'
import ButtonDec from './button_dec'
import ButtonInc from './button_inc'
import ButtonReset from './button_reset'


function App() {
 const[count,setCount]=useState(0);
 
 const handelIncreament=()=>setCount((prev)=>prev+1);

  return (
    <>
       <div>
        <div>The current counter :  {count}</div>
        <div>
        <ButtonInc onIncreament={handelIncreament}  ></ButtonInc>
        <ButtonDec></ButtonDec>
        <ButtonReset></ButtonReset>
        </div>
       </div>
    </>
  )
}

export default App
