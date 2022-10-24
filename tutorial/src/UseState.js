import React, {useState} from 'react'

export default function UseState() {
    const[count, setCount] =useState(0);
    const handleInc = ()=>{
        setCount(count+1);
    }
    const handleDec = ()=>{
        setCount(count-1);
    }
  return (
    <div>
    <h1>Hello UseState the Count is {count}</h1> 
    <button onClick={handleInc}> Click me +</button>
    <button onClick={handleDec}> Click me -</button>

    </div>
  )
}
