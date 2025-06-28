import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-700 text-white fixed top-14 bottom-0">
            <nav>
                <ul>
                    <li>
                        <Link href="/parallelroutes">Home</Link>
                    </li>
                    <li>
                        <Link href={{ pathname: '/parallelroutes', query: { team: 'true' } }}>Team</Link>
                    </li>
                    <li>
                        <Link href={{ pathname: '/parallelroutes', query: { analytics: 'true' } }}>Analytics</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
