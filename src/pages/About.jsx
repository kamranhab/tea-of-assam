import Footer from "../components/Footer.jsx"
import BottomBar from "../components/BottomBar.jsx"
import PagesHeader from "../components/PagesHeader.jsx"
import "../styles/about.css"

function About(){


    return(
        <>
        <PagesHeader/>
        <div className="about-container">
        <h1>About Us</h1>
        <Footer/>
        </div>
        <BottomBar/>
        </>
    )
}

export default About