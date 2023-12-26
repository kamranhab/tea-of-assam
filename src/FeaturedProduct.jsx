import { useState } from "react";
import "./featuredproduct.css";
import Products from "./Products.jsx";

function FeaturedProduct({ addToCart }) {
  const [items, setItems] = useState(Products);

  return (
    <div className="featured-products">
      {items.map((item) => (
        <div key={item.id} className="product">
          <img src={item.image} alt={item.name} />
          <div className="product-details">
            <h3>{item.name}</h3>
            <p>{item.size}</p>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProduct;
