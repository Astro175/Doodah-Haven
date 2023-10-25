import './home.scss';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch 12 products from the API
    fetch('http://localhost:4000/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error('API response does not indicate success');
        }
      })
      .catch((error) => console.error('Error fetching products', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products to show at once
    slidesToScroll: 4, // Number of products to scroll by
  };

  return (
    <div className="products-display">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="package">
            {/* Render product details here */}
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p className="details">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
