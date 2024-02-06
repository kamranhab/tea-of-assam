import { useState, useEffect } from "react";
import "../styles/allproducts.css";
import Products from "../data/Products.jsx";
import Header from "../components/Header.jsx";
import BottomBar from "../components/BottomBar.jsx";
import Footer from "../components/Footer.jsx";
import CartPop from "../components/CartPop.jsx";
import { Link } from "react-router-dom";
import Search from "../components/Search.jsx";
import { toast } from "sonner";

function AllProducts() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [cartVisible, setCartVisible] = useState(false);

  const [items, setItems] = useState(Products);

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
      <Header
        cartCount={cartItems.length}
        setCartVisible={setCartVisible}
        toggleModal={toggleModal}
      />
      <Search isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="all-products-600px">
        <div className="all-products">
          {items.map((item) => (
            <div key={item.id} className="product">
              <Link to={`/products/${item.slug}`} state={{ items: item }}>
                <img
                  className="all-product-image"
                  src={item.image}
                  alt={item.name}
                />
              </Link>
              <div className="all-product-details">
                <h3 className="all-product-name">
                  <Link to={`/products/${item.slug}`} state={{ items: item }}>
                    {item.name}
                  </Link>
                </h3>
                <p className="all-product-size">{item.size}</p>
                <p className="all-product-price">{item.price}</p>
                <button
                  className="all-padd-to-cart"
                  onClick={() => {
                    addToCart(item);
                    toast.success('Added to Cart',  { duration: 1000 } );
                  }}
                >
                  Add to Cart
                </button>
          
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}

export default AllProducts;
