import React from 'react';
import LogoIcon from '../../assets/icons/LogoIcon';
import Toggle from "../Toggle/Toggle";
import './Header.scss'


const Header = () => {
  return (
    <header className='header-container '>
      <div className='logo-container'>
        <LogoIcon/>
        <h1 className='logo-text'>LoGo</h1>
      </div>
      <Toggle/>
    </header>
  );
};

export default Header;
