// import React from 'react'
import Counter from "./components/Counter"
import Card from "./components/Card"
import Button from "./components/Button"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
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
const [isLoggedIn,setIsLoggedIn]=useState(true);
function toggleLogin(){
  setIsLoggedIn(!isLoggedIn);
}
// if(isLoggedIn){
//   return(
//     <LogoutButton/>
//   )
// }
// else{
//   <LoginButton/>
  
// }
// if(!isLoggedIn){
//   return(<LoginButton/>)

// }

function handleInputChange(e){
  // console.log("dont trase pass")
  console.log("value till now: ",e.target.value);
}
function handlesubmit(e){
e.preventDefault();
//custom behaviour
alert("form submited")
}


  return (
    <div className="main-div">

      <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>handleInputChange(e)}></input>
        <button type="submit" onClick={handlesubmit}>Submit</button>
      </form>
      {
        isLoggedIn?<LogoutButton toggle={toggleLogin}/>:<LoginButton toggle={toggleLogin}/>
      
      // isLoggedIn&&<LogoutButton/>
      }

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
