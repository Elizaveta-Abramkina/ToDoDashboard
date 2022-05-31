import React from 'react';
import './Home.scss'
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Dashboard from "../../components/Dashbourd/Dashboard";

const Home = () => {
    return (
        <div className='page'>
            <Header/>
            <div className='row'>
                <Menu/>
                <Dashboard/>
            </div>

        </div>
    );
};

export default Home;
