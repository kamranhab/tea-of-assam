import React, { useState } from "react";
import "../styles/bottombar.css";
import bhomeIcon from "../assets/bhome.png";
import baccountIcon from "../assets/baccount.png";
import bhamburgIcon from "../assets/bham.png";
import { Link } from "react-router-dom";

function BottomBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bottom-container">
      <div className="bbar">
        <div className="bicons-container">
          <Link to="/">
            <img src={bhomeIcon} alt="" className="bhome" />
          </Link>
          <Link to="/account"><img src={baccountIcon} alt="" className="baccount" /></Link>

          <div className="bhamburg" onClick={toggleDropdown}>
            <img src={bhamburgIcon} alt="" className="bham" />
            {dropdownVisible && (
              <ul className="dropup-menu">
                <li>
                  <Link to="/all-products">Products</Link>
                </li>
                <li>
                  <Link to="/wholesale">Wholesale</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/policies">Policies</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
