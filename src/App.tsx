import React, {useEffect} from 'react'
import Dashboard from "./components/Dashbourd/Dashboard";
import './styles/app.scss';
import Home from "./pages/Home/Home";
import {useTheme} from "./styles/useTheme";
import {useAppSelector} from "./store/hooks";



function App() {
    const {setTheme} =useTheme()
    const themeValue = useAppSelector(state=> state.theme.theme)

    useEffect(()=>{
        setTheme(themeValue)
    },[themeValue])

    return (
        <div className='app'>
            <Home/>
        </div>
    );
}

export default App;
