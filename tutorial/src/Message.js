import { useState } from 'react'
export const Message = () => {
    const[message,setMessage]= useState('Welcome Visiter')
  return (
    <div>
    <h1>{message}</h1>
    <button onClick={() => setMessage('Thankyou or Subscribing')}>
     Subscribe
    </button>
    </div>
  )
}
