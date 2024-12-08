import React from 'react'

function DynamicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            Dynamic Layout Level 2
            {children}
        </div>
    )
}

export default DynamicLayout