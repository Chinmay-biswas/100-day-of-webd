// import React from 'react'

function Card(props) {
  return (
    <div>
      {props.children}
      <input type="text" onChange={(e)=>props.setName(e.target.value)} />
      <p>Name of the card : {props.name}</p>
    </div>
  )
}

export default Card
