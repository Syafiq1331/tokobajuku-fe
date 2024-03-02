import React from 'react';
import { FiShoppingCart, FiHeart } from "react-icons/fi";

const Navbar = () => {

  const style = { color: "#0F172A", fontSize: "30" }

  return (
    <header>
        <nav className='flex px-12 justify-between py-6 shadow-lg'>
            <h1 className='font-bold'>TokoBajuku</h1>
            <ul className=' gap-x-4 hidden lg:flex'>
                <li className='hover:font-semibold hover:underline'>Home</li>
                <li className='hover:font-semibold hover:underline'>Contact</li>
                <li className='hover:font-semibold hover:underline'>About</li>
                <li className='hover:font-semibold hover:underline'>Sign Up</li>
            </ul>
            <div className='flex gap-x-3'>
              <input type="text" placeholder='What do u looking for?' className='border-2 px-3 py-1 bg-black/10 rounded-lg' />
              <FiHeart style={style}/>
              <FiShoppingCart style={style}/>
            </div>  
        </nav>
    </header>
  )
}

export default Navbar