import "../styles/search.css";
import Products from "../data/Products.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search({ isOpen, closeModal }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = searchTerm.length >= 2
    ? Products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brandName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay">
      <div className={`search-modal-content ${isOpen ? 'open' : ''}`}>
        <input
          type="text"
          placeholder="Search Product..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredProducts.length > 0 && (
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div key={product.id} className="search-result-item">
                <Link to={`/products/${product.slug}`} state={{ items: product }}>
                  <img
                    className="search-p-img"
                    src={product.image}
                    alt={product.name} 
                  />
                </Link>
                <div className="search-p-name-price">
                  <Link to={`/products/${product.slug}`} state={{ items: product }}>
                    {product.name} - {product.price}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div> 
  );
}

export default Search;
