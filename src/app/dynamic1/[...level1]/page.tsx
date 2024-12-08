"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';

const componentMap: { [key: string]: React.FC } = { 
    'first': FirstComponent, 
    'second': SecondComponent, 
    'third': ThirdComponent,
};

const AnyLevel1Page: React.FC = () => {
    const pathname = usePathname();
    const segments = pathname?.split('/').filter(segment => segment !== '');
    const ComponentToRender = componentMap[segments[segments.length - 1]] || (() => <p>Unknown path.</p>);
    
    return (
        <div>
            <h1>Dynamic Route with TypeScript</h1> 
            <p>Path: {segments ? segments.join('/') : 'N/A'}</p>
            <ComponentToRender />
        </div>
    )
}

export default AnyLevel1Page