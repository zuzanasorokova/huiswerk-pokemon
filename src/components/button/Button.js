import React from 'react';
import "./Button.css"

const Button = ({disabled, type, name, onClick}) => {
    return (
        <div id="button">
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