import React, {ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import style from './MyModules.module.css'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type myModulesType = DefaultButtonPropsType & {
    visible:boolean
    setVisible: (visible:boolean)=>void
}

const MyModules = ({children, visible, setVisible, ...restProps}:myModulesType) => {

    const rootClass = [style.myModule]

    if(visible) {
        rootClass.push(style.active)
    }

    return (
        <div className={rootClass.join(' ')}
             onClick={()=>setVisible(false)}
        >
            <div className={style.moduleContent}
                 onClick={(e)=>e.stopPropagation()} //stopPropagation  предотвращает всплыте, т.е при клике на на инпуты окно не закроется
            >
                {children}
            </div>
        </div>
    );
};

export default MyModules;