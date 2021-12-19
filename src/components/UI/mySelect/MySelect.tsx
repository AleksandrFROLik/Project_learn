import React from 'react';

type optionType = {
    value:string
    name:string
}

type mySelect = {
    defaultValue: string
    options: optionType[]
    value:string
    onChange: (sort:string)=>void
}

const MySelect = ({defaultValue, options, value, onChange}:mySelect) => {

    return (
        <select value={value}
                onChange={(e)=>onChange(e.currentTarget.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;