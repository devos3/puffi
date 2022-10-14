import React from 'react'


const Hcard = () => {
  function Hcard (props){
    return(
      <div className='containerHcards'>
      
      
      <div className='card'>
        <img  src={props.img} className='card__img' alt=''>
          <button className='card__btn' type='submit' >SHOP</button>
        </img>
        
        <div className='card__body'>
          <h2 className='card__title'>{props.title}</h2>
          <p className='card__description'>{props.description} </p>
          
          <button className='card__btn'>VIEW MORE</button>
        </div>
      </div>


      </div>
  
  
    );
    }
  
  
    return (
      <div className="App">
            
        <Hcard 
          img ="https://ecobiz.org/wp-content/uploads/600px-by-600px-Image-1-300x300.jpg"
          title = "PUFFI RAIN"
          description="LANBRELLA - Paraguas de viaje compacto, plegable, reversible y resistente al viento"
         
        />
  
        <Hcard 
          img ="https://images.pexels.com/photos/5421530/pexels-photo-5421530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title = "PUFFI PUFF"
          description="Silla Chill Sack Bean Bag: muebles de espuma de memoria gigante y una tumbona grande. Gran sofá con gran cubierta de gamuza suave resistente al agua. Varios colores, 5 pies., Tela "
         
        />
      </div>
    );
  }
  


export default Hcard