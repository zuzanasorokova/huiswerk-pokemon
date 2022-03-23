import React from 'react';
import "./Button.css";

const Button = ({disabled, type, onClick, name}) => {
    return (
        <div>
            <button
                disabled={disabled}
                type={type}
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    );
};

export default Button;