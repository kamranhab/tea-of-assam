import { useState } from 'react';
import './featuredproduct.css';
import Products from './Products.jsx';

function FeaturedProduct() {
  const [items, setItems] = useState(Products);

  return (
    <div className="featured-products">
      {items.map((elem, index) => {
        const { brandName, image, name, price, category, size } = elem;
        return (
          <div key={index} className="product" style={index === 1 || index === 4 ?{ backgroundColor:'#40342F'} : null}>
            <img src={image} alt="product-image" className="product-image"/>
            <div className="product-details">
            <h3 className="brand-name">{brandName}</h3>
            <h2 className="product-name">{name}</h2>
            <h3 className="product-category">{category}</h3>
            <h3 className="product-price">{price}</h3>
            <h3 className="product-size">{size}</h3>
            <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedProduct;
