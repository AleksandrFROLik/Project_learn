import React, {ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import style from './MyModules.module.css'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type myModulesType = DefaultButtonPropsType & {
    visible:boolean
    setVisible: (visible:boolean)=>void
}

const MyModules = ({children, visible, ...restProps}:myModulesType) => {

    const rootClass = [style.myModule]

    if(visible) {
        rootClass.push(style.active)
    }

    return (
        <div className={rootClass.join(' ')}>
            <div className={style.moduleContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModules;