import '../styles/featuredsection.css'
import FeaturedProduct from './FeaturedProduct.jsx'

function FeaturedSection({ addToCart }) {
  return (
    <div className='featured-container'>
      <div className="featured-heading">
        <h2 className='featured-text'>Featured Products</h2>
        <h2 className="f-show-more">View All</h2>
      </div>
      <FeaturedProduct addToCart={addToCart} />
    </div>
  );
}

export default FeaturedSection