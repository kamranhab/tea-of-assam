import "./cartpop.css";
import deleteimg from './assets/delete.png'

function CartPop({ setCartVisible }) {
  let n = 0;
  let producttitle = "Green Tea";

  return (
    <>
      <div className="popupcart">
        <div className="popup-head">
          <h2>My Cart</h2>
          <h3>{n} Items</h3>
        </div>

        <div className="popup-product-card">
          <img src="" alt="" />
          <div className="popup-product-details">
            <h3>{producttitle}</h3>
            <p>Size:</p>
            <div className="popup-counter">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
            <div className="price-delete">
              <p>Price:</p>
              <img src={deleteimg} />
            </div>
          </div>
        </div>

        <div className="popup-checkout-card">
            <div>
                <h2>Subtotal</h2>
                <p>{} USD</p>
            </div>
            <button>Proceed to Buy</button>
            <button className="close-cart" onClick={() => setCartVisible(false)}>Close</button>
        </div>
      </div>
    </>
  );
}

export default CartPop;
