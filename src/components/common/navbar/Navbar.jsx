import './Navbar.css'
import { GenIcon } from 'react-icons'
 import logo from 'https://puffeados.com/wp-content/uploads/2020/07/logo.png'
 
 function Navbar (){
    return (
    <nav className='navbar space-between'>
        <div>
            <img  src={logo} alt="logo" className='ImgLgo'/>
        </div>

        <div className="section">
            <div className='section'>
                <GenIcon />
                <span>PUFFI PUF</span>
            </div>
            
            <div className='item-section'>
                <GenIcon />
                <span>PUFFI RAIN</span>
            </div>

            <div className='item-section'>
                <GenIcon />
                <span>PUFFI CART</span>
            </div>

            <div className='item-section'>
                <GenIcon />
                <span>PUFFI NAP</span>
            </div>

            <div className='compras'>
                <span>
                    Mi cuenta <select></select>{""}
                </span> 

                <span>Mi carrito</span>
            </div>
        </div>
        </nav>

    );
 }

 export default Navbar;

