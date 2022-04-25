import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import CalendarMini from "../components/calendarMini/CalendarMini";
import './dashbourd.scss'
import TasksList from "../components/TasksList/TasksList";


const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div className="layout">
                <Menu/>
                <CalendarMini/>
                <TasksList/>
            </div>

        </div>
    );
};

export default Dashboard;
