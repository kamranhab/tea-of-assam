import "../styles/giftsection.css";
import GiftProducts from "../data/GiftProducts";
import { useState } from "react";

function GiftSection({ giftAddToCart }) {
  const giftSubtitles =
    "As the coffee shop market becomes more popular, the number of cafe websites is growing. The internet and social media play an important role in finding new customers.";

  const [items, setItems] = useState(GiftProducts);

  return (
    <div className="gift-main-container">
      <div className="gift-container">
        <div className="gift-info">
          <h3 className="gift-boxes-text">Gift Boxes</h3>
          <h2 className="gift-heading">
            Gift your loved ones the Tea of Assam Gift Boxes
          </h2>
          <p className="gift-subtitles">{giftSubtitles}</p>
        </div>

        <div className="gift-products">
          {items.map((item) => (
            <div key={item.id} className="gift-product">
              <img src={item.image} alt="gift-image" className="gift-image" />
              <div className="gift-details">
                <h2 className="gift-name">{item.name}</h2>
                <h3 className="gift-size">{item.size}</h3>
                <h3 className="gift-price">{item.price}</h3>

                <button
                  className="add-to-cart"
                  onClick={() => giftAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GiftSection;
