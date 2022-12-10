import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;