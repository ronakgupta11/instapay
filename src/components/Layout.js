import React from 'react'
import Navbar from './Navbar';
function Layout({ children }) {
    return (
        <>
            <div className=" overflow-hidden flex flex-col min-h-screen">
                <Navbar/>
                <div className=" max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                    {children}
                </div>
            
            </div>
        </>
    );
};

export default Layout;
