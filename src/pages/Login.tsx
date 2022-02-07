import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

 export const Login = () => {
    return (
        <div>
            <h1> Page from login</h1>
            <form>
                <MyInput type='text' placeholder='Enter login'/>
                <MyInput type='password' placeholder='Enter password'/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

