// import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <div className="container2">
        {props.children}
    <button onClick={props.incrementCount}>{props.text}</button></div>
  )
}

export default Button
