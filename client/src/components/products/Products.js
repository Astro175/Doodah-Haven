import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import hero from '../../images/hero2.png';
// import laptop1 from '../../images/laptop.png';
// import laptop2 from '../../images/laptop2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './product.scss';
// import cpu1 from '../../images/cpu.png';
// import cpu2 from '../../images/cpu2.png';
// import monitorG from '../../images/gaming-monitor.png';
// import alpha from '../../images/alpha.png';
// import beta from '../../images/build.png';


// const ProductBadge = ({ image, title, price }) => {
//   return (
//     <div className='product-badge'>
//       <div>
//         <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
//         <span className='stock'>In stock</span>
//       </div>
//       <img src={image} alt='product' />
//       <div className='review'>
//         {[...Array(5)].map((_, index) => (
//           <FontAwesomeIcon key={index} icon={faStar} className='star'/>
//         ))}
//         <span>Review 4</span>
//       </div>
//       <p className='details'>EX DISPLAY: {title}</p>
//       <p className='strike'>{price}</p>
//       <p>{price}</p>
//     </div>
//   );
// };

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching products', error));
  }, []);

  return (
    <div className='products'>
      <img src={hero} alt='products hero im' />
      <div>
        <div className='product-title'>
          <h1>New Product</h1>
          <a href='/'>See all new products</a>
        </div>
        <div className='product-block'>

          {products.map((product) => (
            <div key={product._id}>
            <Link to={`/product/${product._id}`} className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>

            {/* <img src={`data:${product.photo.contentType};base64,${product.photo.data}`} alt='product' /> */}
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
          <p>Stock Quantity: {product.stock_quantity}</p>
          <p>Label: {product.label}</p>

            <div className='review'>
              {[...Array(5)].map((_, index) => (

                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>

            <p className='details'>{product.description}</p>
            <p className='strike'>{product.price}</p>
            <p>{product.price}</p>
          </Link>
          </div>
          ))}
</div>
</div>
    </div>
  );
};

export default Products;

