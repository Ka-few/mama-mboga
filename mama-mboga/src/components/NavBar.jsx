import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
        <h2>Mama Mboga</h2>
        <ul className='nav-links'>
            <li>
                <NavLink to='/' end>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/add-product'>
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink to='/about'>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>

        </ul>

    </nav>
  )
}

export default NavBar
