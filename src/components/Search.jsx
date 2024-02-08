import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import searchImg from "../assets/search2.svg";
import closeSearch from "../assets/close.svg";
import Products from "../data/Products.jsx";
import '../styles/search.css';

export default function Search() {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchIcon, setSearchIcon] = useState(searchImg);
  // Initialize openInput as a boolean state
  const [isOpen, setIsOpen] = useState(false); // Renamed for clarity

  const filteredProducts = searchTerm.length >= 2
    ? Products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brandName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Toggle function to open/close the search input
  const toggleInput = () => {
    setIsOpen(!isOpen); // Toggle the state
    if (!isOpen) {
      setTimeout(() => inputRef.current.focus(), 0); // Focus after state update
    }
  };
  const toggleNew=()=>{
    if (!isOpen){
        {   toggleInput();
            setSearchTerm("");
            setSearchIcon(isOpen ? searchImg : closeSearch); // Change icon based on state
          }
    }
    }
  return (
    <div
    onClick={() => {
        toggleNew();
      }}
    className={isOpen ? 'head-search-container-open' : 'head-search-container'}>
      <div className="search-modal-content">
        <input
          type="text"
          placeholder={isOpen ?"Search products...":"..."}
          className={isOpen ? 'head-search-input-open' : 'head-search-input'}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSearchIcon(closeSearch);
          }}
          ref={inputRef}
        />

        <div className="search-results">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.slug}`} state={{ items: product }}>
              <div className="search-result-item">
                <img className="search-p-img" src={product.image} alt={product.name} />
                <div className="search-p-name">{product.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <img
        onClick={() => {
          toggleInput(); // Use the toggle function
          setSearchTerm("");
          setSearchIcon(isOpen ? searchImg : closeSearch); // Change icon based on state
        }}
        src={searchIcon}
        alt=""
        className="search-icon head-icons"
        aria-label="Toggle search input"
        role="button"
      />
    </div>
  );
}
