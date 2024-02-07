import "../styles/header.css";
import headerLogo from "../assets/headerlogo.png";
import searchImg from "../assets/search2.svg";
import closeSearch from "../assets/close.svg";
import accountIcon from "../assets/account.svg";
import Products from "../data/Products.jsx";
import dd from '../assets/dd.svg'
import cartIcon from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ cartCount, setCartVisible }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchIcon, setSearchIcon] = useState(searchImg);
  const filteredProducts =
    searchTerm.length >= 2
      ? Products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brandName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

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
            Company <img className="dd" src={dd} alt="" />
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

        <div className="head-search-container">
          <div className="search-modal-content">
            <input
              type="text"
              placeholder="Search products..."
              className="head-search-input"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchIcon(closeSearch);
              }}
            />

            <div className="search-results">
              {filteredProducts.map((product) => (
                <Link
                  to={`/products/${product.slug}`}
                  state={{ items: product }}
                >
                  {" "}
                  <div key={product.id} className="search-result-item">
                    <img
                      className="search-p-img"
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="search-p-name">{product.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <img
            onClick={() => {
              setSearchTerm("");
              setSearchIcon(searchImg);
            }}
            src={searchIcon}
            alt=""
            className="search-icon head-icons"
          />
        </div>

        <div className="head-icons-container">
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
