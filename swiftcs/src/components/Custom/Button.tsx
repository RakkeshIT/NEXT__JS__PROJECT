"use client"
import React from "react";
interface ButtonPropse {
    label: string;
    onClick?: () => void,
}

const Button: React.FC<ButtonPropse> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
            {label}
        </button>
    )
}

export default Button;