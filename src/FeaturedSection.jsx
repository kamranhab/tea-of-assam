import './featuredsection.css'
import FeaturedProduct from './FeaturedProduct.jsx'

function FeaturedSection(){
   return( <div className='featured-container'>
       <div className="featured-heading">
         <h2 className='featured-text'>Featured Products</h2>
         <h2 className="f-show-more">Show More Products</h2>
         
       </div>

       <FeaturedProduct/>
       </div>
    )
}

export default FeaturedSection