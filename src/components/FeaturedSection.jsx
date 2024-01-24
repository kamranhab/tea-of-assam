import '../styles/featuredsection.css'
import FeaturedProduct from './FeaturedProduct.jsx'

function FeaturedSection({ addToCart }) {
  return (
    <div className='featured-container'>
      <div className="featured-heading">
        <p className='featured-text'>Featured Products</p>
        <p className="f-show-more">View All</p>
      </div>
      <FeaturedProduct addToCart={addToCart} />
    </div>
  );
}

export default FeaturedSection