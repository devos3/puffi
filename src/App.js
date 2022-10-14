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


function Card (){
  return(

  <div className='card'>
      <div className='card-body'>
        <div className='col'>
          <div className='row-6'>
            <img  src='https://w0.peakpx.com/wallpaper/312/783/HD-wallpaper-person-holding-black-umbrella.jpg' alt=''/>,
            <button className='card__btn'>SHOP</button>
          </div>
          
          <div className='row-6'>
            <img src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61PyxsMIxlL._AC_SL1280_.jpg' alt=''/>,
            <h2 className='card-title'>Pufi RAIN</h2>,
            <h2 className='card-description'>Descripcion del producto. Este es un texto simulado</h2>
            <p className='card-ver mas'>VER mas</p>

          </div>
       </div>

    </div>
      <button className='card__btn'>View more</button>

  </div>
  )

}    


  return (
    <div className="App">
      <Header />
      <Slider images={images}/>
      <Card />
    </div>
  );
}

export default App;
