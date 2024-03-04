import React, { ReactNode, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode,
  className?: string
}

const Layout = ({ children, className }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavbarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='grid grid-cols-12 h-full'>
      <div className={`lg:col-span-2 fixed inset-y-0 left-0 z-50 bg-gray-200 overflow-hidden transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar />
      </div>
      <div className={`lg:col-span-12 col-span-12 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <Navbar onClick={handleNavbarClick} />
        <div className={`px-10 py-4 ${className}`}>
          {children}
        </div>
      </div>
      {/* Overlay to close sidebar when clicked outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleNavbarClick}
        ></div>
      )}
    </div>
  );
};

export default Layout;

