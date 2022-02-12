import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {About} from "../../../pages/About";
import {Posts} from "../../../pages/Posts";
import Error from "../../../pages/Error";
import PostIdPage from '../../../pages/PostIdPage';
import {Login} from "../../../pages/Login";
import {AuthContext} from "../../../context/Context";
import Loader from "../Loader/Loader";

const AppRouter = () => {
    debugger
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)
    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='/posts/:id' element={<PostIdPage/>}/>
                <Route path='/error' element={<Error/>}/>
            </Routes>
             : <Routes>
                 <Route path="*" element={<Navigate to='/login'/>}/>
                 <Route path='/login' element={<Login/>}/>
             </Routes>
    );
};

export default AppRouter;