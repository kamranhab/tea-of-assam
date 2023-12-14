import "./cartpop.css";
import deleteimg from './assets/delete.png'
import imge from './assets/greentea.png'

function CartPop({ setCartVisible }) {
  let n = 0;
  let producttitle = "Green Tea";

  return (
    <>
      <div className="popupcart">
        <div className="popup-top">
        <div className="popup-head">
          <p>My Cart</p>
          <p>{n} Items</p>
          <button className="close-cart" onClick={() => setCartVisible(false)}>Close</button>
        </div>

        <div className="popup-product-card">
          <div className="card-top">
          <img src={imge} alt="" />
          <div className="popup-product-details">
            <h3>{producttitle}</h3>
            <p>Size:</p>
            <div className="popup-counter">
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
            
          </div>
          </div>
          <div className="price-delete">
              <p>Price:</p>
              <img src={deleteimg} />
          </div>
        </div>
        </div>

        <div className="popup-bottom">
            <div className="subtotal">
                <p>Subtotal</p>
                <p>{} USD</p>
            </div>
            <button className="buy">Proceed to Buy</button>
        </div>
      </div>
    </>
  );
}

export default CartPop;
