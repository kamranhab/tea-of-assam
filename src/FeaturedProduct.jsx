import { useState } from 'react';
import './featuredproduct.css';
import Products from './Products.jsx';


function FeaturedProduct({ addToCart }) {
  const [items, setItems] = useState(Products);

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="featured-products">
      {items.map((elem, index) => (
        <div key={index} className="product" style={index === 1 || index === 4 ? { backgroundColor: '#40342F' } : null}>
          <img src={elem.image} alt="product-image" className="product-image" />
          <div className="product-details">
            <h3 className="brand-name">{elem.brandName}</h3>
            <h2 className="product-name">{elem.name}</h2>
            <h3 className="product-category">{elem.category}</h3>
            <h3 className="product-size">{elem.size}</h3>
            <h3 className="product-price">{elem.price}</h3>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default FeaturedProduct;
