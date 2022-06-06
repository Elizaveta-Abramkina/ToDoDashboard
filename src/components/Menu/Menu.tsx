import React from 'react';
import TasksIcon from "../../assets/icons/TasksIcon";
import HomeIcon from '../../assets/icons/HomeIcon';
import './Menu.scss'
import MenuInput from "./atoms/MenuInput";
import {NavLink} from 'react-router-dom';


const Menu = () => {

  return (
    <div className='menu-container'>
      <NavLink to='/' className={({isActive}) => isActive ? 'activeLink' : undefined}><MenuInput icon={HomeIcon()}
                                                                                                 name='Home'/></NavLink>
      <NavLink to='/tasks' className={({isActive}) => isActive ? 'activeLink' : undefined}><MenuInput icon={TasksIcon()}
                                                                                                      name='Tasks'/></NavLink>
    </div>
  );
};

export default Menu;
