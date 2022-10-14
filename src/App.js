import React from 'react';
import { Header }  from './components/common'
import Slider from './components/Slider'
import './App.css';

function App() {
  const images = [
    {
      id:'1',
      title:'Para tus hijos',
      image:'https://m.media-amazon.com/images/I/61uI0MGpKvL._AC_SL1001_.jpg',
    },
    {
      id:'2',
      title:'Descanso merecido',
      image:'https://m.media-amazon.com/images/I/61Y-HZ4dPLL._AC_SL1024_.jpg',
    },
    {
      id:'3',
      title:'Para ti',
      image:'https://m.media-amazon.com/images/I/71tQckGUpFL._AC_SL1500_.jpg',
    }


  ]
  return (
    <div className="App">
      <Header />
      <Slider images={images}/>
    </div>
  );
}

export default App;
