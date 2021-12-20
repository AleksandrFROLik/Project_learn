import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './MyButton.module.css';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonType = DefaultButtonPropsType & {

}

const MyButton = ({children, ...restProps}:MyButtonType) => {

    return (
        <button className={style.btn}
                {...restProps}
        >
            {children}
        </button>

    );
};

export default MyButton;


