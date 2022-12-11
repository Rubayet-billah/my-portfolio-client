import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import portfolioBackground from '../../assets/backgound/portfolioBackground.jpg'

const MainLayout = () => {
    return (
        <div className='bg-fixed bg-cover' style={{ backgroundImage: `url(${portfolioBackground})` }}>
            <Header></Header>
            <main className='container mx-auto px-2 py-5 bg-black bg-opacity-30 min-h-screen'>
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