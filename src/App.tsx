import React, {useEffect} from 'react'
import './styles/app.scss';
import {useTheme} from "./styles/useTheme";
import {useAppSelector} from "./store/hooks";
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashbourd/Dashboard";
import Tasks from './pages/Tasks/Tasks';


function App() {
  const {setTheme} = useTheme()
  const themeValue = useAppSelector(state => state.theme.theme)

  useEffect(() => {
    setTheme(themeValue)
  }, [themeValue])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
