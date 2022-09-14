import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

function NavBar(){
  return(
    <div>
      <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>{"  "}
      <NavLink to="/animals">Animals</NavLink>{"  "}
      <NavLink to="/form">Form</NavLink>
    </div>
  )

}
export default NavBar