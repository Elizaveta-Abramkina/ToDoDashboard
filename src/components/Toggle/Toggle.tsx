import React, {useEffect, useState} from 'react';
import {useTheme} from "../../styles/useTheme";
import './Toggle.scss'



const Toggle = () => {
    const { theme,setTheme} =useTheme()
    const [input, setInput] = useState(true)

    const handleChangeTheme = ()=>{
        setInput(!input)
        if(!input) {
            setTheme('light')
            localStorage.setItem('theme','light' )
        } else {
            setTheme('dark')
            localStorage.setItem('theme','dark' )
        }
    }

    useEffect(()=>{
        const themeValue = localStorage.getItem('theme')
        if(themeValue){
        setTheme(themeValue)
       }
    })

    return (
        <label className='toggle-label'>
            <input type='checkbox' className='toggle-input' checked={input} onChange={()=>{handleChangeTheme()}}  />
            <span className='toggle-round'/>
        </label>
    );
};

export default Toggle;
