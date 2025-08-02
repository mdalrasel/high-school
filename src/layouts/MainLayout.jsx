import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const MainLayout = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className='min-h-[calc(100vh-220px)] '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;