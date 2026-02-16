import {useState} from 'react'
import './App.css'


function App() {
  let [counter,setCounter]=useState(0)//5 is default value
  const addValue=()=>{
    if(counter<20){
    setCounter(counter+1)
    }
  }

  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
  }

  return (

    <>
     <h1>Counter App</h1>
     <h3>Counter value:{counter}</h3>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
