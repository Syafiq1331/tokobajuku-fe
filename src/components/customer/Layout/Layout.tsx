import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className='px-12 py-6'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
