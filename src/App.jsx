import { useState } from 'react';
import FeaturedSection from './FeaturedSection.jsx';
import GiftSection from './GiftSection.jsx';
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import bg from './assets/bg2.mp4'
import CartPop from './CartPop.jsx';
import BottomBar from './BottomBar.jsx';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      {cartVisible && <CartPop setCartVisible={setCartVisible}/>}
      <div className="main-container">
        <video id="video-background" autoPlay muted loop preload="auto">
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header cartCount={cartCount} setCartVisible={setCartVisible} />
        
        <HeroSection />
      </div>
      <FeaturedSection addToCart={addToCart} />
      <GiftSection addToCart={addToCart} />
      <BottomBar/>
    </>
  );
}


export default App
