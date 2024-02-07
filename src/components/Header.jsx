import "../styles/header.css";
import headerLogo from "../assets/headerlogo.png";
import searchIcon from "../assets/search.svg";
import searchOpen from "../assets/search.png"
import accountIcon from "../assets/account.svg";
import cartIcon from "../assets/cart.svg";
import { Link } from "react-router-dom";

function Header({ cartCount, setCartVisible, toggleModal }) {
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
            <Link to="/all-products">All Products</Link>
          </li>
          <li>
            <Link to="/wholesale">Wholesale</Link>
          </li>
          <li className="pages">
            Company
            <ul className="dropdown-content">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/policies">Terms and Policies</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="head-icons-container">
          <img
            onClick={toggleModal}
            src={`${toggleModal?searchIcon:searchOpen}`}
            alt=""
            className="search-icon head-icons"
          />
          <img src={accountIcon} alt="" className="account-icon head-icons" />
          <span
            className="cart-icon-container"
            onClick={() => setCartVisible((preview) => !preview)}
          >
            <img src={cartIcon} alt="" className="cart-icon head-icons" />
            {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
