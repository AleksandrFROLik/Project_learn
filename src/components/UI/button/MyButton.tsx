import React from 'react';
import  './MyButton.css';

type MyButtonType = {
    name: string,
    callBack: ()=> void
}

const MyButton = ({name, callBack}:MyButtonType) => {

    const onClickHandler = (e:any) => {
        e.preventDefault()
        callBack()
    }

    return (
        <button className='btn'
                onClick={(e)=>onClickHandler(e)}
        >
            {name}
        </button>
    );
};

export default MyButton;