import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flex px-12 justify-between py-6 shadow-lg'>
            <h1 className='font-bold'>TokoBajuku</h1>
            <ul className='flex gap-x-4'>
                <li className='hover:font-semibold hover:underline'>Home</li>
                <li className='hover:font-semibold hover:underline'>Contact</li>
                <li className='hover:font-semibold hover:underline'>About</li>
                <li className='hover:font-semibold hover:underline'>Sign Up</li>
            </ul>
            <div className='flex'>
              <input type="text" placeholder='What do u looking for?' className='border-2 px-3 py-1 bg-black/10 rounded-lg' />
            </div>  
        </nav>
    </header>
  )
}

export default Navbar