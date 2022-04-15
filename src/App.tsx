import React from 'react'
import Dashboard from "./pages/Dashboard";
import './styles/app.scss';
import { useTheme } from './styles/useTheme';



function App() {
    const {theme, setTheme} =useTheme()


    const handleChangeThemeL = ()=>{
        setTheme('light')
    }
    return (
        <div className='app'>
            {/*<button onClick={()=>{handleChangeThemeL()}}></button>*/}
            <Dashboard/>
        </div>
    );
}

export default App;
