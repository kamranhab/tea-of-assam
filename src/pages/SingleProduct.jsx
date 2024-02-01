import "../styles/singleproduct.css";
import spImg from "../assets/greentea.webp";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Header from "../components/Header.jsx";
import CartPop from "../components/CartPop.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  const location = useLocation();
  const items = location.state.items;

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((elem) => elem.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((elem) =>
          elem.id === product.id
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onDelete = (index) => {
    setCartItems(currentItems => currentItems.filter((_, idx) => idx !== index));
  };

  const onUpdateQuantity = (index, delta) => {
    setCartItems(currentItems => currentItems.map((item, idx) => 
      idx === index ? { ...item, quantity: Math.max(item.quantity + delta, 0) } : item
    ));
  };
  return (
    <>
      {cartVisible && (
        <CartPop
          cartItems={cartItems}
          setCartVisible={setCartVisible}
          onUpdateQuantity={onUpdateQuantity}
          onDelete={onDelete}
        />
      )}
      <Header cartCount={cartItems.length} setCartVisible={setCartVisible} />
      <div className="single-product-container">
        <div className="sp-container">
          <div className="sp-img-container">
            <img src={spImg} className="sp-img" />
          </div>
          <div className="sp-details">
            <h3 className="sp-name">{items.name}</h3>
            <p className="sp-size">10oz</p>
            <p className="sp-price">$20.00</p>
            <div className="sp-desc">{items.desc}</div>
            {/* <div className="sp-counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div> */}
            <button className="sp-add-to-cart"  onClick={() => addToCart(items)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}

export default SingleProduct;
