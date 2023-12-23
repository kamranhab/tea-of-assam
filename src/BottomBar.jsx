
import './bottombar.css';
import bsearchIcon from './assets/search.svg';
import baccountIcon from './assets/account.svg';

function BottomBar() {
  return (
    <div className='bottom-container'>
      <div className='bbar'>
        <div className='bicons-container'>
          <img src={bsearchIcon} alt="" className="bsearch" />
          <img src={baccountIcon} alt="" className="baccount" />
          <div className="bhamburg">
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Wholesale</a></li>
              <li><a href="#pages1">About Us</a></li>
              <li><a href="#pages2">Contact</a></li>
              <li><a href="#pages3">Terms and Policies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
