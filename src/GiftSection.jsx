import "./giftsection.css";
import giftImg1 from './assets/giftimage1.webp'
import giftImg2 from './assets/giftimage2.webp'

function GiftSection() {
  const giftSubtitles =
    "As the coffee shop market becomes more popular, the number of cafe websites is growing. The internet and social media play an important role in finding new customers.";

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
        <div className="gift-product">
          <img src={giftImg1} alt="gift-image" className="gift-image" />
          <div className="gift-details">
            {/* <h3 className="gift-brand">Tea of Assam</h3> */}
            <h2 className="gift-name">Gift Box</h2>
            {/* <h3 className="gift-category">Gift Boxes</h3> */}
            <h3 className="gift-size">3 items</h3>
            <h3 className="gift-price">$100.00</h3>
            <button className="add-to-cart">Add to Cart</button>
          </div> 
        </div>

        <div className="gift-product">
          <img src={giftImg2} alt="gift-image" className="gift-image" />
          <div className="gift-details">
            {/* <h3 className="gift-brand">Tea of Assam</h3> */}
            <h2 className="gift-name">Tea Bundle</h2>
            {/* <h3 className="gift-category">Gift Boxes</h3> */}
            <h3 className="gift-size">3 items</h3>
            <h3 className="gift-price">$100.00</h3>
            <button className="add-to-cart">Add to Cart</button>
          </div> 
        </div>
         
      </div>
    </div>
    </div>
  );
}

export default GiftSection;
