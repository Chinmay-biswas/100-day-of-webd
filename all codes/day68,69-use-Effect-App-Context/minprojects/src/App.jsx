// import React from 'react'

import { createContext, useState } from "react"
// import Logger from "./components/Logger"
// import Timer from "./components/Timer"
import ChildC from "./components/ChildC";
import "./App.css"

// import { useEffect } from "react"
const UserContext=createContext();

function App() {
  // first is side effect func,second is cleanup finction ,thirdis comma seprated depedencry list if some thisng update then this happens
// variation 1- runs on every render useEffect(()=>{}) on every click count 
// variation 2 only runs on first render useEffect(()=>{},[])
// variton 3 when count change  useEffect(()=>{},[count])
//variation 4 depend on multipe dependencys useEffect(()=>{},[count,total])
// variation with cleanup function
// useEffect(()=>{
//   // first 
//   return()=>{
//     // second
//   }
// },[
//   // third
// ])

// create context


// wrap all the child inside a provider
const [user]=useState({name:"chinamy"})
// pass the value 
// consumer ke andar jake consume karlo

const [theme,setTheme]=useState('light');

  return (
    
    
      
      <UserContext.Provider value={{theme,setTheme,user}}>
        <div id="container" style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildC/>
        </div>
        {/* <Logger/>
      <Timer/> */}
      </UserContext.Provider>
      
    
  )
}

export default App
export {UserContext}
