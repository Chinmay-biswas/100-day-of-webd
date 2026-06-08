// import React from 'react'
import { useContext } from "react"
import { UserContext } from "../App"
import "./ChildC.css"
function ChildC() {
    
    const {theme,setTheme,user} = useContext(UserContext);
    function handelclick(){
      if(theme==='light'){
        setTheme("dark")
      }else{
        setTheme('light')
      }
    }
  return (
    <div id="container1"><div>{user.name}</div><div>{theme}</div>
     
     
     <button onClick={handelclick}>Change Theme</button>
    </div>
  )
}

export default ChildC
