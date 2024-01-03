import { useState } from "react";
import "./featuredproduct.css";
import Products from "./Products.jsx";

function FeaturedProduct({ addToCart }) {
  const [items, setItems] = useState(Products);

  return (
    <div className="featured-products">
      {items.map((item) => (
        <div key={item.id} className="product">
          <img className='product-image'src={item.image} alt={item.name} />
          <div className="product-details">
            <h3 className="product-name">{item.name}</h3>
            <p className="product-size">{item.size}</p>
            <p className="product-price">{item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProduct;
