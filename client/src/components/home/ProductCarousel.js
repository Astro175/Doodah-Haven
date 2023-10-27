import './home.scss';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products/');
        if (!response.ok) {
          console.error('API response does not indicate success');
          return;
        }
  
        const data = await response.json();
  
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
  
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products to show at once
    slidesToScroll: 4, // Number of products to scroll by
  };

  const truncateName = (name) => {
    const words = name.split(' ');
    if (words.length > 4) {
        return words.slice(0, 3).join(' ') + '...';
    }
    return name;
}

  return (
    <div className="products-display">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="package">
            <Link to={`/products/${product._id}`} className='productId-link'>
            <p>{truncateName(product.name)}</p>
            <img src={product.image} alt='popular products' />
            <div className="product-price">
                <p>Price: # {product.price}</p>
                <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
