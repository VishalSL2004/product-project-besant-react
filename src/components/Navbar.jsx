import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>Product Store</h2>

        <div className='nav-link'>
            <Link to="/">Home</Link>

            <Link to="/products">Products</Link>
        </div>
    </nav>
  )
}

export default Navbar