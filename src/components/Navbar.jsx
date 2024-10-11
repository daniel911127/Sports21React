import '../styles/components/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='containerNav'>
      <NavLink className="link" to='/'><img src="logo.jpeg" alt="logo" /></NavLink>     
      <ul className="containerList">
        <NavLink><li>FUTBOL</li></NavLink>
        <NavLink><li>BEISBOL</li></NavLink>
        <NavLink><li>TENNIS</li></NavLink>
        <NavLink><li>BOXEO</li></NavLink> 
      </ul>
      <CartWidget/>
    </div>
  )
}

export default Navbar