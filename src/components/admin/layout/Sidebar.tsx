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
                        <FlowbiteSidebar.Item icon={HiChartPie}>
                            <Link href="/admin/dashboard/app">
                                Dashboard
                            </Link>
                        </FlowbiteSidebar.Item>
                        <FlowbiteSidebar.Item icon={HiViewBoards}>
                            <Link href="/admin/product/app">
                                Product
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </FlowbiteSidebar.Item>
                        <FlowbiteSidebar.Item icon={HiInbox}>
                            <Link href="/admin/category/app">
                                Category
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </FlowbiteSidebar.Item>
                        <FlowbiteSidebar.Item icon={HiUser}>
                            <Link href="/admin/etalase/app">
                                Etalase
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </FlowbiteSidebar.Item>
                        <FlowbiteSidebar.Item icon={HiShoppingBag}>
                            <Link href="/admin/monitoring/app">
                                Monitoring Admin
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </FlowbiteSidebar.Item>
                        <FlowbiteSidebar.Item icon={HiArrowSmRight}>
                            <Link href="/admin/keuangan/app">
                                Perhitungan Keuangan
                                <span>
                                    <a href="#"></a>
                                </span>
                            </Link>
                        </FlowbiteSidebar.Item>
                    </FlowbiteSidebar.ItemGroup>
                </FlowbiteSidebar.Items>
            </FlowbiteSidebar>
        </div>
    )
}

export default Sidebar;
