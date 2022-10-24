import React, {useState,useEffect} from 'react'

export const UseEffect = () => {
   const [count,setCount] =useState(0);
   const handleCount = ()=>{
    setCount(count+1);
}
   useEffect(() =>{
console.log("use effect")

   })
  return (
    <div>
        <h1> use effect is {count}</h1>
        <button onClick={handleCount}>Click Me</button>
    </div>
  )
}
