import "./cartpop.css";
import CartProduct from "./CartProduct";

function CartPop({ cartItems = [], setCartVisible, onUpdateQuantity, onDelete }) {
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.price ? parseFloat(item.price.substring(1)) : 0;
    return total + item.quantity * itemPrice;
  }, 0);

  return ( 
    <>
      <div className="popupcart">
        <div className="popup-head">
            <p>My Cart</p>
            <p>{itemCount} Items</p>
            <button className="close-cart" onClick={() => setCartVisible(false)}>Close</button>
        </div>
        <div className="card-subtotal">
          <div className="popup-top">
            {cartItems.map((item, index) => (
              <CartProduct key={index} item={item} index={index} onUpdateQuantity={onUpdateQuantity} onDelete={onDelete} />
            ))}
          </div>
          <div className="popup-bottom">
              <div className="subtotal">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)} USD</p>
              </div>
              <button className="buy">Proceed to Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPop;
