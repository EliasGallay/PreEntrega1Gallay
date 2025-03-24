import React from 'react'
import './NavBar.css'
import Cart from '../CartWidget/Cart'
const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li><Cart/></li>
        </ul>
    </nav>

  )
}

export default NavBar 
