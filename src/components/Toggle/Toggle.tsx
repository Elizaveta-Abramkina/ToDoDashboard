import React, {useState} from 'react';
import {useTheme} from "../../styles/useTheme";
import './Toggle.scss'



const Toggle = () => {
    const {setTheme} =useTheme()
    const [input, setInput] = useState(true)

    const handleChangeThemeL = ()=>{
        setInput(!input)
        if(!input) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <label className='toggle-label'>
            <input type='checkbox' className='toggle-input' checked={input} onChange={()=>{handleChangeThemeL()}}  />
            <span className='toggle-round'/>
        </label>
    );
};

export default Toggle;
