import React from 'react';

export default function LayoutAll({
    children,
    team,
    analytics,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    team: React.ReactNode;
}) {
    return (
        <div>
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-lg font-bold">Dashboard</h1>
            </header>
            <main>
                <div>{children}</div>
                <div>{team}</div>
                <div>{analytics}</div>
            </main>
        </div>
    );
}
