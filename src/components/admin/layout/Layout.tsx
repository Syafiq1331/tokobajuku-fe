import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode,
  className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className='grid grid-cols-12 h-full'>
      <Sidebar className='lg:col-span-2 lg:block hidden' />
      <div className='lg:col-span-10 col-span-12'>
        <Navbar />
        <div className={`px-10 py-4 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
