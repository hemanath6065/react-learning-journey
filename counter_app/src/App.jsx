
import './App.css'
import ButtonDec from './button_dec'
import ButtonInc from './button_inc'
import ButtonReset from './button_reset'


function App() {
 

  return (
    <>
       <div>
        <div>The current counter :  0</div>
        <div>
        <ButtonInc></ButtonInc>
        <ButtonDec></ButtonDec>
        <ButtonReset></ButtonReset>
        </div>
       </div>
    </>
  )
}

export default App
