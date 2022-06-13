import {setState, useState, useEffect} from 'react';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';
import PictureDisplay from './components/PictureDisplay';

function App() {
  const [picture, setPicture] = useState(null)
  const getPicture = async() => {
    const response = await fetch (`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
    setPicture(data);
  };

  return (
    <div className="App">
      <Header></Header>
      <Button handleClick = {getPicture}/>
      <PictureDisplay picture={picture} />
    </div>
  );
}

export default App;
