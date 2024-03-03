import React, { useEffect, useState } from 'react';
import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link';

interface SidebarProps {
    className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }: SidebarProps) => {
    const [dynamicClass, setDynamicClass] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const pageHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            if (pageHeight > windowHeight) {
                setDynamicClass('h-full');
            } else {
                setDynamicClass('h-screen');
            }
        };

        const resizeListener = () => {
            handleResize();
        };

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', resizeListener);
            return () => window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return (
        <div className={`bg-[#F9FAFB] flex ${dynamicClass} ${className}`}>

            <FlowbiteSidebar aria-label="Default sidebar example" className='h-full'>
                <FlowbiteSidebar.Items className='h-full'>
                    <FlowbiteSidebar.ItemGroup>
                        <Link href="/admin/dashboard/app" passHref legacyBehavior>
                            <div className='flex items-center gap-x-2 py-2'>
                                <p><HiChartPie className='text-2xl text-secondary' /></p>
                                <p className='text-md text-secondary'>Dashboard</p>
                            </div>
                        </Link>
                        <Link href="/admin/product/app" passHref legacyBehavior>
                            <div className='flex items-center gap-x-2 py-2'>
                                <p><HiViewBoards className='text-2xl text-secondary' /></p>
                                <p className='text-md text-secondary'>Product</p>
                            </div>
                        </Link>
                        <Link href="/admin/category/app" passHref legacyBehavior>
                            <div className='flex items-center gap-x-2 py-2'>
                                <p><HiInbox className='text-2xl text-secondary' /></p>
                                <p className='text-md text-secondary'>Category</p>
                            </div>
                        </Link>
                        <Link href="/admin/etalase/app" passHref legacyBehavior>
                            <div className='flex items-center gap-x-2 py-2'>
                                <p><HiUser className='text-2xl text-secondary' /></p>
                                <p className='text-md text-secondary'>Etalase</p>
                            </div>
                        </Link>
                        <Link href="/admin/monitoring/app" passHref legacyBehavior>
                            <div className='flex items-center gap-x-2 py-2'>
                                <p><HiShoppingBag className='text-2xl text-secondary' /></p>
                                <p className='text-md text-secondary'>Monitoring Admin</p>
                            </div>
                        </Link>
                        <Link href="/admin/keuangan/app" passHref legacyBehavior>
                            <div className='flex items-center gap-x-2 py-2'>
                                <p><HiArrowSmRight className='text-2xl text-secondary' /></p>
                                <p className='text-md text-secondary'>Perhitungan Keuangan</p>
                            </div>
                        </Link>
                    </FlowbiteSidebar.ItemGroup>
                </FlowbiteSidebar.Items>

            </FlowbiteSidebar>
        </div>
    )
}

export default Sidebar;
