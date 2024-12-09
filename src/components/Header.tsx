import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 flex justify-between items-center">
            <div className="text-lg font-bold">Dashboard</div>
            <div>
                <span className="mr-4">Profile</span>
                <span>Logout</span>
            </div>
        </header>
    );
};

export default Header;
