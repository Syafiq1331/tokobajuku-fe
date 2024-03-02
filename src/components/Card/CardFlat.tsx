import React from 'react';

interface LayoutProps {
    children: React.ReactNode,
    title : React.ReactNode,
    className?: string
}

const CardFlat = ({children, title, className} : LayoutProps ) => {
    return (
        <div className={`border bg-white p-4 ${className}`}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default CardFlat