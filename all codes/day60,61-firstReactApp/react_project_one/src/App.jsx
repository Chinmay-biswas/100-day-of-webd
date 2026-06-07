import UserCard from "./components/UserCard"
import './App.css'

function App() {
  

  return (
    <div className="container">
      <UserCard name="chinmay biswas" desc="desc1"/>
      <UserCard name="chinmay biswas1" desc="desc2"/>
      <UserCard name="chinmay biswas2" desc="desc3"/>
      <UserCard name="chinmay biswas3" desc="desc4"/>
      {/* to send image use image = {image} */}
    </div>
  )
}

export default App
