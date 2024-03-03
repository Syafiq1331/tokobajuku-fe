import React from 'react';

interface LayoutProps {
    children?: React.ReactNode,
    title?: React.ReactNode,
    className?: string,
    classNameBody?: string
}

const CardFlat = ({ children, title, className, classNameBody }: LayoutProps) => {
    return (
        <div className={`border bg-white p-4 ${className}`}>
            <h4 className={`${classNameBody}`}>{title}</h4>
            {children}
        </div>
    )
}

export default CardFlat