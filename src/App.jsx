import { useState } from 'react';
import FeaturedSection from './FeaturedSection.jsx';
import GiftSection from './GiftSection.jsx';
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import bg from './assets/bg2.mp4'
import CartPop from './CartPop.jsx';
import BottomBar from './BottomBar.jsx';  

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(elem => elem.id === product.id);
    console.log(product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(elem => 
        elem.id === product.id ? { ...elem, quantity: elem.quantity + 1 } : elem
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const giftAddToCart = (product) => {
    const existingGiftProduct = cartItems.find(elem => elem.id === product.id);
    console.log(product.id);
    if (existingGiftProduct) {
      setCartItems(cartItems.map(elem => 
        elem.id === product.id ? { ...elem, quantity: elem.quantity + 1 } : elem
      ));
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
      {cartVisible && <CartPop cartItems={cartItems} setCartVisible={setCartVisible} onUpdateQuantity={onUpdateQuantity} onDelete={onDelete} />}
      <div className="main-container">
        <video id="video-background" autoPlay muted loop preload="auto">
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header cartCount={cartItems.length} setCartVisible={setCartVisible} />
        <HeroSection />
        <FeaturedSection addToCart={addToCart} />
        <GiftSection giftAddToCart={giftAddToCart} />
        <BottomBar/>
      </div>
    </>
  );
}

export default App;
