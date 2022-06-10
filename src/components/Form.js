import { useState } from 'react';

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const getPicture = async() => {
            const response = await fetch (`https://dog.ceo/api/breeds/image/random`);
            const data = await response.json();
            props.picturePull(data);
          };
        getPicture();
  
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Paws!"/>
        </form>
        </div>

    )
};

export default Form