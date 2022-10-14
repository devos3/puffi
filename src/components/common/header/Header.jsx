import './Header.css'
import Navbar from '../navbar/Navbar'


function Header() {
  return (
    <header className='App-header'>
    <Navbar />
    <h2 className='banner-text'>
      ESTAR COMODO, <br></br> NUNCA FUE TAN FACIL.
    </h2>
    <div className='shop-btn'>
      <button>SHOP</button>
    </div>

    </header>
  );
}

export default Header;