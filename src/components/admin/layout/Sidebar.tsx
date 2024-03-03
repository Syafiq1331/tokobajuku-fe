import React, { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link';

interface SidebarProps {
    className?: string
}

const sidebar = ({ className }: SidebarProps) => {
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

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className={`bg-[#F9FAFB] flex ${dynamicClass} ${className}`}>

            <Sidebar aria-label="Default sidebar example" className='h-full'>
                <Sidebar.Items className='h-full'>
                    <Sidebar.Logo href="#" img="/favicon.ico" imgAlt="Flowbite logo">
                        Tokobajuku
                    </Sidebar.Logo>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item icon={HiChartPie}>
                            <Link href="/admin/dashboard/app">
                                Dashboard
                            </Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiViewBoards}>
                            <Link href="/admin/product/app">
                                Product
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiInbox}>
                            <Link href="/admin/category/app">
                                Category
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiUser}>
                            <Link href="/admin/etalase/app">
                                Etalase
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiShoppingBag}>
                            <Link href="/admin/monitoring/app">
                                Monitoring Admin
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </Sidebar.Item>
                        <Sidebar.Item icon={HiArrowSmRight}>
                            <Link href="/admin/keuangan/app">
                                Perhitungan Keuangan
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>

    )
}

export default sidebar;