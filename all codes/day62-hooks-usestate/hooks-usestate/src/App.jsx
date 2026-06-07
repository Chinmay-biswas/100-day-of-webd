// import React from 'react'
import Counter from "./components/Counter"
import Card from "./components/Card"
import Button from "./components/Button"
import './App.css'
import { useState } from "react"

function App() {
  const [num,setNum]=useState(0);
  function handleClick(){
    setNum(num+1);
  }
//create state
//manage state
//change state
//sabhi child me state lo sync karana hai
const [name , setName]=useState('');


  return (
    <div className="main-div">

      <Button incrementCount={handleClick} text="Click Me"> <h1>{num}</h1></Button>
      <Counter />
      <Card  name1="chinmay biswas" name={name} setName={setName}>
        <h1>best person on planet</h1>
        <p>i am very consistent</p>
        <p>i will complete the course {name}</p>

      </Card>
    </div>
  )
}

export default App
