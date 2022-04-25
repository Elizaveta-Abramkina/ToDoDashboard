import React from 'react';
import TasksIcon from "../../assets/icons/TasksIcon";
import HomeIcon from '../../assets/icons/HomeIcon';
import './Menu.scss'

const Menu = () => {

    return (
        <div className='menu-container'>
            <p className='menu-input'>
                <HomeIcon/>
                <p className='menu-text'>Home</p>
            </p>
            <p className='menu-input'>
                <TasksIcon/>
                <p className='menu-text'>Tasks</p>
            </p>
        </div>
    );
};

export default Menu;
