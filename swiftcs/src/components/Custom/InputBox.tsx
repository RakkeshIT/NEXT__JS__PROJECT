"use client"
import React from "react";

interface InputProps {
    value?: string;
    placeholder?:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    type?:string;
    className?:string;

}
const InputBox: React.FC<InputProps> = ({
    value,
    placeholder,
    onChange,
    type,
    className

}) => {
    return(
        <input type={type} value={value} placeholder={placeholder} onChange={onChange} id="first_name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`} required />
    )
}


export default InputBox;