import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function Layout({
    children,
    team,
    analytics,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    team: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 pt-16">
                <Sidebar />
                <main className="flex-1 p-4 bg-gray-100 text-black ml-64">
                    <div className='w-full'>
                        {children}
                    </div>
                    {team && <div>{team}</div>}
                    {analytics && <div>{analytics}</div>}
                </main>
            </div>
        </div>
    );
}
