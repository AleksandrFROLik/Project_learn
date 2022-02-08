import React, {useEffect, useState} from 'react';
import './styles/App.css'
import AppRouter from "./components/UI/AppRouter/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {BrowserRouter} from 'react-router-dom';
import {AuthContext} from './context/Context';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const  [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('isAuth')) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
            setIsLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;


