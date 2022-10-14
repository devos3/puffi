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
      image:'https://http2.mlstatic.com/D_NQ_NP_2X_775851-MCO50062332424_052022-F.webp',
    },
    {
      id:'3',
      title:'Para ti',
      image:'https://m.media-amazon.com/images/I/71tQckGUpFL._AC_SL1500_.jpg',
    }
  ]


function Card (props){
  return(
    <div className='wrapper'>
    <div className='card'>
      <img  src={props.img} className='card__img' alt=''/>
      <div className='card__body'>
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description}</p>
        <h3 className='card__price'>{props.price}</h3>
        <button className='card__btn'>VIEW MORE</button>
      </div>
    </div>
    </div>


  );
  }


  return (
    <div className="App">
      <Header />
      <Slider images={images}/>
      <Card 
        img ="https://media.istockphoto.com/photos/hand-holding-umbrella-picture-id1318116588?k=20&m=1318116588&s=612x612&w=0&h=KQhjJerKWecFiuzdk4oYiMorVF2AX7gzsFs0IDf5olA="
        title = "Umbrella"
        description="All"
        price ="30.00"
      />

      <Card 
        img ="https://images.pexels.com/photos/5421530/pexels-photo-5421530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title = "Umbrella black"
        description="All"
        price ="50.00"
      />
    </div>
  );
}

export default App;
