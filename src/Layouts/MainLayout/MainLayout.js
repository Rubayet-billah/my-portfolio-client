import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className='container mx-auto py-5 '>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;