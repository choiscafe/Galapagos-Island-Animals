import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

function NavBar(){
  return(
    <div className="App-header">
      <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>{" "}
      <NavLink to="/animals" className="navBarLink">Animals</NavLink>{" "}
      <NavLink to="/form" className="navBarLink">Form</NavLink>
    </div>
  )
}

export default NavBar