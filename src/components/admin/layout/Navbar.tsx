import Image from 'next/image';
import React from 'react';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=' bg-[#4ADE80] w-full px-10 py-20 pt-10 flex justify-between'>
      <FaBars className='text-2xl text-white'/>
      <div className='flex gap-x-2'>
      <Image
      src="/admin/avatar.png"
      width={24}
      height={25}
      alt="Picture of the author"
    />
        <p className='text-white'>Hi, ujang udin</p>
      </div>
    </nav>
  )
}

export default Navbar