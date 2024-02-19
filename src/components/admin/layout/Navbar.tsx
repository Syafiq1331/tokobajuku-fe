import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flex'>
            <h1>Logo</h1>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>   
        </nav>
    </header>
  )
}

export default Navbar