import React, {useEffect, useState} from 'react';
import './Toggle.scss'

import {changeTheme} from '../../store/theme/themeSlice';
import {useAppDispatch} from '../../store/hooks';


const Toggle = () => {
  const [input, setInput] = useState(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')
    if (saveTheme === 'dark') {
      setInput(false)
    }
    if (saveTheme) {
      dispatch(changeTheme(saveTheme))
    }
  })

  const addTheme = (value: string) => {
    dispatch(changeTheme(value))
    localStorage.setItem('theme', value)
  }

  const handleChangeTheme = () => {
    setInput(!input)
    if (!input) {
      addTheme('light')
    } else {
      addTheme('dark')
    }
  }

  return (
    <label className='toggle-label'>
      <input type='checkbox' className='toggle-input' checked={input} onChange={() => {
        handleChangeTheme()
      }}/>
      <span className='toggle-round'/>
    </label>
  );
};

export default Toggle;
