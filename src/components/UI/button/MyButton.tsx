import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './MyButton.module.css';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {}

const MyButton: React.FC<MyButtonPropsType> = (
    {
        children,
        ...restProps
    }
) => {

    return (
        <button className={style.btn}
                {...restProps}
        >
            {children}
        </button>

    );
};

export default MyButton;


