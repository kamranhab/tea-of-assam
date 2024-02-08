import { useState, useEffect } from "react";
import "../styles/featuredproduct.css";
import Products from "../data/Products.jsx";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import rightbutton from "../assets/right.png";

function FeaturedProduct({ addToCart }) {
  const [items, setItems] = useState(Products);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const itemsPerPage = windowWidth < 600 ? 2 : items.length;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredProducts = items.filter((product) => product.featured == true);
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="featured-products-600px">
      <div className="featured-products">
        {currentItems.map((item) => (
          <div key={item.id} className="product">
            <Link to={`/products/${item.slug}`} state={{ items: item }}>
              <img className="product-image" src={item.image} alt={item.name} />
            </Link>
            <div className="product-details">
              <h3 className="product-name">
                <Link to={`/products/${item.slug}`} state={{ items: item }}>
                  {item.name}
                </Link>
              </h3>
              <p className="product-size">{item.size}</p>
              <p className="product-price">{item.price}</p>
              <button
                className="padd-to-cart"
                onClick={() => {
                  addToCart(item);
                  toast.success('Added to Cart',  { duration: 1000 } );
                }}
              >
                Add to Cart
              </button>
              
            </div>
          </div>
        ))}
      </div>
      {windowWidth < 600 && totalPages > 1 && (
        <div className="pagination">
          <img src={rightbutton} onClick={paginate}/>
        </div>
      )}
    </div>
  );
}

export default FeaturedProduct;
