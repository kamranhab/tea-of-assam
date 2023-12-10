import { useState } from 'react';
import FeaturedSection from './FeaturedSection.jsx';
import GiftSection from './GiftSection.jsx';
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import bg from './assets/bg2.mp4'

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <div className="main-container">
        <video id="video-background" autoPlay muted loop>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header cartCount={cartCount} />
        <HeroSection />
      </div>
      <FeaturedSection addToCart={addToCart} />
      <GiftSection addToCart={addToCart} />
    </>
  );
}


export default App
