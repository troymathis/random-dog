import { useState } from 'react';

const Button = ({handleClick}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return(
        <div>
            <button onClick={handleClick}>Paws!</button>
        </div>

    )
};

export default Button