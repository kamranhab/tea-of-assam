import '../styles/pagesheader.css'
import headerLogo from '../assets/headerlogo.png'
import { Link } from 'react-router-dom'

function PagesHeader({ cartCount, setCartVisible }) {
    return (
      <div className="pheader-container">
        <header className="pheader">
          <Link to='/'><img src={headerLogo} alt="" className="pheader-logo" /></Link>
          
        </header>
      </div>
    );
  }

export default PagesHeader