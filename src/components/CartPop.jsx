import { Link } from "react-router-dom";
import "../styles/cartpop.css";
import CartProduct from "./CartProduct.jsx";
import React, { useEffect, useRef } from 'react';

function CartPop({
  cartItems = [],
  setCartVisible,
  onUpdateQuantity,
  onDelete,
}) {
  const popupRef = useRef(); 

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setCartVisible(false); // Close popup
      }
    }

    //event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setCartVisible]); // Dependency array

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.price ? parseFloat(item.price.substring(1)) : 0;
    return total + item.quantity * itemPrice;
  }, 0);

  return (
    <>
      <div className="popupcart" ref={popupRef}>
        <div className="popup-head">
          <p>My Cart</p>
          <p>{itemCount} Items</p>
          <button onClick={() => setCartVisible(false)}>Close</button>
        </div>
        <div className="popup-top">
          {cartItems.map((item, index) => (
            <CartProduct
              key={index}
              item={item}
              index={index}
              onUpdateQuantity={onUpdateQuantity}
              onDelete={onDelete}
            />
          ))}
        </div>
        <div className="popup-bottom">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)} USD</p>
          </div>
          <Link to="/checkout">
            <button className="buy">Proceed to Buy</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartPop;
