import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react'
import './MyInput.css'


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
                className='myInput'
            />

        </div>
    )
}

export default MyInput