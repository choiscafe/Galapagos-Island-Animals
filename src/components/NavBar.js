import { NavLink } from 'react-router-dom'

function NavBar(){
  return(
    <div>
      <NavLink to="/">Home</NavLink>{"  "}
      <NavLink to="/animals">Animals</NavLink>{"  "}
      <NavLink to="/form">Form</NavLink>
    </div>
  )

}
export default NavBar