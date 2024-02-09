import "../styles/header.css";
import headerLogo from "../assets/headerlogo.png";

import accountIcon from "../assets/account.svg";
import dropdown from "../assets/dd.svg";
import cartIcon from "../assets/cart.svg";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";

function Header({ cartCount, setCartVisible }) {

  return (
    <div className="header-container">
      <header className="header">
        <Link to="/">
          <img src={headerLogo} alt="" className="header-logo" />
        </Link>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-products">Shop Now</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pages">
            Company <img className="dd" src={dropdown} alt="dropdown icon" />
            <ul className="dropdown-content">
              <li>
                <Link to="/about">About TOA</Link>
              </li>
              <li>
                <Link to="/wholesale">Wholesale</Link>
              </li>
              <li>
                
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
              <Link to="/policies">Policies</Link>
              </li>
            </ul>
          </li>
        </ul>
        
        <div className="head-icons-container">
        <Search />
        <Link to="/account">  <img src={accountIcon} alt="account-icon" className="account-icon head-icons" /> </Link>
          <span
            className="cart-icon-container"
            
          >
            <img onClick={() => setCartVisible((preview) => !preview)} src={cartIcon} alt="" className="cart-icon head-icons" />
            {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
