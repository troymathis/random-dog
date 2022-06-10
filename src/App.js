import {setState, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';
import PictureDisplay from './components/PictureDisplay';

function App() {
  const [picture, setPicture] = useState(null)
  const getPicture = async() => {
    const response = await fetch (`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
    setPicture(data);
  };
    useEffect(() => {
      getPicture();

    }, []);
  return (
    <div className="App">
      <Header></Header>
      <Form picturePull = {getPicture}/>
      <PictureDisplay picture={picture} />
    </div>
  );
}

export default App;
