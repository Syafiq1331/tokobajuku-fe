import Image from 'next/image';
import React from 'react';
import { FaBars } from "react-icons/fa6";

interface NavbarProps {
  onClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  return (
    <nav className='bg-[#4ADE80] w-full px-10 py-16 flex justify-between items-center'>
      <FaBars className='text-2xl text-white cursor-pointer' onClick={onClick} />
      <div className='flex gap-x-2 items-center'>
        <Image
          src="/admin/avatar.png"
          width={24}
          height={25}
          alt="Avatar"
        />
        <p className='text-white'>Hi, Ujang Udin</p>
      </div>
    </nav>
  )
}

export default Navbar;
