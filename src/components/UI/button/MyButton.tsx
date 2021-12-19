import React from 'react';
import  './MyButton.css';

type MyButtonType = {
    name: string,
}

const MyButton = ({name}:MyButtonType) => {
    return (
        <button className='btn'>
            {name}
        </button>
    );
};

export default MyButton;