import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-light'>
        <div className='d-flex container py-3 justify-content-between'>
            <h2>Book Management</h2>
            <div className='d-flex justify-content-evenly gap-3'>
                <Link to='/'>Home</Link>
                <Link>Add Books</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar