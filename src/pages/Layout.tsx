import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { Outlet } from 'react-router-dom';
import './Layout.scss'
const Layout = () => {
    return (
        <div>
            <Header/>
            <div className='row'>
                <Menu/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
