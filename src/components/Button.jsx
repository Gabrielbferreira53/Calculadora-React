
import React from 'react'; 
import './Button.css';

export default (props) => {
    return (
        <button
            className={`button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
            `}
            onClick={() => props.click && props.click(props.label)}
        >
            {props.label}
        </button>
    );
};
