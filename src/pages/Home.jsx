import { useState, useEffect } from 'react';
import FeaturedSection from '../components/FeaturedSection.jsx';
import GiftSection from '../components/GiftSection.jsx';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import bg from '../assets/bg2.mp4';
import CartPop from '../components/CartPop.jsx';
import BottomBar from '../components/BottomBar.jsx'; 
import Footer from '../components/Footer.jsx';
import Search from '../components/Search.jsx'
import '../styles/home.css'


function Home() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const [cartVisible, setCartVisible] = useState(false);


// Search xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


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
    <div className='main'>

      {cartVisible && <CartPop cartItems={cartItems} setCartVisible={setCartVisible} onUpdateQuantity={onUpdateQuantity} onDelete={onDelete} />}
      <div className="main-container">
        <video id="video-background" autoPlay muted loop preload="auto">
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header  cartCount={cartItems.length} setCartVisible={setCartVisible}  toggleModal={toggleModal}/>
        <Search isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        <HeroSection />
        </div>
        <FeaturedSection addToCart={addToCart} />
        <GiftSection giftAddToCart={giftAddToCart} />
        <Footer />
        <BottomBar />
      
    </div>
  );
}

export default Home;
