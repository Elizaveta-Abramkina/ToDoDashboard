import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import CalendarMini from "../components/calendarMini/calendarMini";
import './dashbourd.scss'


const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div className="layout">
                <Menu/>
                <CalendarMini/>
            </div>

        </div>
    );
};

export default Dashboard;
