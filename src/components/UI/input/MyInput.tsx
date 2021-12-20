import { DetailedHTMLProps, InputHTMLAttributes} from 'react'
import React from 'react';
import style from './MyInput.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyInputPropsType = DefaultInputPropsType & {

}

const MyInput: React.FC<MyInputPropsType> = (
    {
        ...restProps
    }
) => {

    return (
        <div>
            <input
                {...restProps}
                className={style.myInput}
            />

        </div>
    )
}

export default MyInput