import { useState } from 'react'
import  './Counter.css'

// import React from 'react'

function Counter() {
  const [count,setCount] = useState(0);
  return (
    <div className="container">
        <p id="para">you have clicked the button {count} times</p>
        <button id="button" onClick={()=>{setCount(count+1)}}>Click me</button>
      
    </div>
  )
}

export default Counter
