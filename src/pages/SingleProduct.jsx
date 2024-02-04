import "../styles/singleproduct.css";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Header from "../components/Header.jsx";
import CartPop from "../components/CartPop.jsx";
import Search from "../components/Search.jsx";
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

   // Search xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   const [isModalOpen, setIsModalOpen] = useState(false);
   const toggleModal = () => setIsModalOpen(!isModalOpen);
   //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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
    setCartItems((currentItems) =>
      currentItems.filter((_, idx) => idx !== index)
    );
  };

  const onUpdateQuantity = (index, delta) => {
    setCartItems((currentItems) =>
      currentItems.map((item, idx) =>
        idx === index
          ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
          : item
      )
    );
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
      <Header  cartCount={cartItems.length} setCartVisible={setCartVisible} toggleModal={toggleModal}/>
        <Search isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="single-product-container">
        <div className="sp-container">
          <div className="sp-img-container">
            <img src={items.image} className="sp-img" />
          </div>
          <div className="sp-details">
            <h3 className="sp-name">{items.name}</h3>
            <p className="sp-size">{items.size}</p>
            <p className="sp-price">{items.price}</p>
            <div className="sp-desc">{items.desc}</div>
            {/* <div className="sp-counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div> */}
            <button className="sp-add-to-cart" onClick={() => addToCart(items)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}

export default SingleProduct;
