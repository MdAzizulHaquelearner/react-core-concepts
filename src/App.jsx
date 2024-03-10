import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Tajbi from './Tajbi'
import Tajbi2 from './Tajbi2'
import Effect from './UseEffect'
function handleClick () {
  alert('clicked 1 ')
}
function handleClick2 () {
  alert('clicked 2 ')
}

function App() {
  return (
    <>    
      <h4>React Core Concepts 2</h4> 
<Effect></Effect>

     <Tajbi></Tajbi>
     <Tajbi2></Tajbi2>
    <Counter></Counter>
      <button onClick={handleClick}>click1</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => alert('direct kam kore fellam')}>click3</button>
      <button onClick={() => {
        return alert('okkk')
      }}>click4</button>
    </>
  )
}

export default App
