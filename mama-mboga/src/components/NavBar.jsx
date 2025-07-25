import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar({cart}) {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <nav className='navbar'>
        <h2 className='logo'>Mama Mboga 🥬</h2>
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
                <NavLink to='/cart'>
                    Cart 🛒
            {itemCount > 0 && (
              <span style={{
                marginLeft: '6px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px'
              }}>
                {itemCount}
              </span>
            )}
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


