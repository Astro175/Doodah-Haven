import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../images/hero2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './product.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products/');
        if (!response.ok) {
          console.error('API response does not indicate success');
          setNoResults(true);
          setIsLoading(false);
          return;
        }
  
        const data = await response.json();
  
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products', error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const arrayBufferToBase64 = (buffer) => {
    const binary = [];
    const bytes = new Uint8Array(buffer);
    bytes.forEach((byte) => binary.push(String.fromCharCode(byte)));
    return window.btoa(binary.join(''));
  };

  if (isLoading) {
    return (
      <div className='products'>
        <FontAwesomeIcon icon={faSpinner} color='#78A962' size='4x' />
      </div>
    );
  }

  if (noResults) {
    return (
      <div className='products'>
        <h1>No products found</h1>
      </div>
    );
  }

  return (
    <div className='products'>
      <img src={hero} alt='products hero im' />
      <div>
        <div className='product-title'>
          <h1>Products</h1>
          <a href='/'>See all new products</a>
        </div>
        <div className='product-block'>

          {products.map((product) => (
            <div key={product._id} className='product-badge'>

              <Link to={`/products/${product._id}`} className='product-link'>
                <div>
                  <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
                  <span className='stock'>In stock</span>
                </div>

                {product.photo1 ? ( // Check if photo1 exists
                  <img src={`data:image/jpeg;base64,${arrayBufferToBase64(product.photo1.data.data)}`} alt='product-img' />
                ) : (
                  <img src={product.photo1} alt='placeholder' /> // Provide a placeholder image
                )}

                <p>{product.name}</p>
                {/* <p className='small'>Brand: {product.brand}</p> */}
                <p className='small'>Stock Quantity: {product.stock_quantity}</p>
                {/* <p>Label: {product.label}</p> */}

                <div className='review'>
                  {[...Array(5)].map((_, index) => (

                    <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
                  ))}
                  <span>Review 4</span>
                </div>

                {/* <p className='details'>{product.description}</p> */}
                {/* <p className='strike'>#{product.price}</p> */}
                <p>NGN {product.price}</p>
              </Link>

            </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default Products;