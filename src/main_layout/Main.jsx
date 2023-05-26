import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared_pages/header/Header';
import Footer from '../components/shared_pages/footer/Footer';

const Main = () => {
    return (
        <>
            <Header />
             <Outlet/>
            <Footer />
        </>
    );
};

export default Main;