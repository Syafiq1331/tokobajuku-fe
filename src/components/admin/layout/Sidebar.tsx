import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

interface SidebarProps {
    className?: string
}

const sidebar = ({className}: SidebarProps) => {
  return (
<div className={`h-screen bg-[#F9FAFB] flex ${className}`}>
    <Sidebar aria-label="Default sidebar example" className='h-full'>
        <Sidebar.Items className='h-full'>
            <Sidebar.Logo href="#" img="/favicon.ico" imgAlt="Flowbite logo">
                Flowbite
            </Sidebar.Logo>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                    Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                    Kanban
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox}>
                    Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                    Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                    Sign Up
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
</div>

    )
}

export default sidebar;