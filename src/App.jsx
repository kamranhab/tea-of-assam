import FeaturedSection from './FeaturedSection.jsx';
import GiftSection from './GiftSection.jsx';
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import bg from './assets/bg2.mp4'
function App() {
  

  return (
    <>
       <div className="main-container">
        <video id="video-background" autoPlay muted loop>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header/>
        <HeroSection/>
        </div>
        <FeaturedSection/>
        <GiftSection/>
        
    </>
  );
}

export default App
