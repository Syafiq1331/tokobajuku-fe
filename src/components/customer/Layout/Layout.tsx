import React, { ReactNode } from 'react';
import Navbar from './Navbar';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar/>
      <div className='px-12 py-6'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
