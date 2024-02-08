import React, { useState } from 'react';
import '../styles/bottombar.css';
import bhomeIcon from '../assets/bhome.png'
import bsearchIcon from '../assets/search.svg';
import baccountIcon from '../assets/baccount.png';
import bhamburgIcon from '../assets/bham.png'
import { Link } from 'react-router-dom';
import Search from './Search';

function BottomBar() {

    const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='bottom-container'>
      <div className='bbar'>
        <div className='bicons-container'>
          <Link to='/'><img src={bhomeIcon} alt="" className="bhome" /></Link> 
          <img src={baccountIcon} alt="" className="baccount" />
          
          <div className="bhamburg" onClick={toggleDropdown}>
            <img src={bhamburgIcon} alt="" className="bham" />
            {dropdownVisible && (<ul className='dropup-menu'>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Wholesale</a></li>
              <li><a href="#pages1">About Us</a></li>
              <li><a href="#pages2">Contact</a></li>
              <li><a href="#pages3">Terms and Policies</a></li>
            </ul>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
