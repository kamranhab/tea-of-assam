import './header.css'
import headerLogo from './assets/headerlogo.png'
import searchIcon from './assets/search.svg'
import accountIcon from './assets/account.svg'
import cartIcon from './assets/cart.svg'

function Header(){
 
    return(
        <div className="header-container">
        <header className="header">
            <img src={headerLogo} alt="" className="header-logo"/>
            <ul className="navigation">
                <li>Home</li>
                <li>All Products</li>
                <li>Wholesale</li>
                <li className="pages">Company
                    <ul className="dropdown-content">
     
                        <li><a href="#pages1">About Us</a></li>
                        <li><a href="#pages2">Contact</a></li>
                        <li><a href="#pages3">Terms and Policies</a></li>
                    </ul>
                </li>
            </ul>
            <div className="head-icons-container">
                <img src= {searchIcon} alt="" className="search-icon head-icons" />
                <img src= {accountIcon} alt="" className="account-icon head-icons" />
                <img src= {cartIcon} alt="" className="cart-icon head-icons" />
            </div>
        </header>
        </div>
    )
}

export default Header 