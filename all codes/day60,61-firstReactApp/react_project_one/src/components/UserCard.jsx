//  import React from 'react'\
import './UserCard.css'
import Profile from '../assets/profile1-1.png'

function UserCard(props) {
  return (
    <div className="user-container">
        <p id="user-name">{props.name}</p>
        <img id="user-img" src={Profile} alt="chinmay"></img>
        <p id="user-desc">{props.desc}</p>      
    </div>
  )
}

export default UserCard
