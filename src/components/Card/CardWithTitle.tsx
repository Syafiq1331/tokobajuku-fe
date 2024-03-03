import React from 'react'

interface LayoutProps {
    children: React.ReactNode,
    title : React.ReactNode,
    className?: string
}

const CardWithTitle = ({children, title, className} : LayoutProps ) => {
    return (
        <div className={`border bg-white ${className}`}>
            <h4 className='p-4'>{title}</h4>
            <hr />
            <div className='p-4'>
            {children}
            </div>
        </div>
    )
}

export default CardWithTitle