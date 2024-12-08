import React from 'react'

function DynamicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            Dynamic Layout Level 1
            {children}
        </div>
    )
}

export default DynamicLayout