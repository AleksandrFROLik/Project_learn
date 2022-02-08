import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/Context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const  logout = () => {
        setIsAuth(false)
        localStorage.removeItem('isAuth')
    }

    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Escape</MyButton>
            <div className="navbar__links">
                <MyButton><Link to='/about'>About web</Link></MyButton>
                <MyButton><Link to='/posts'> Posts</Link></MyButton>
            </div>
        </div>
    );
};

export default Navbar;