import React from 'react';
import './styles/App.css'
import AppRouter from "./components/UI/AppRouter/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;


