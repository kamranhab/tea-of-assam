import { useState } from 'react';
import FeaturedSection from '../components/FeaturedSection.jsx';
import GiftSection from '../components/GiftSection.jsx';
import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import bg from '../assets/bg2.mp4'
import CartPop from '../components/CartPop.jsx';
import BottomBar from '../components/BottomBar.jsx'; 
import Footer from '../components/Footer.jsx';

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(elem => elem.id === product.id);

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
        </div>
        <FeaturedSection addToCart={addToCart} />
        <GiftSection giftAddToCart={giftAddToCart} />
        <Footer/>
        <BottomBar/>
      
    </>
  );
}

export default Home;
