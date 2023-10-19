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
    fetch('http://localhost:4000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products', error));
  }, [])
  // const products = [
  //   {image: '../../images/laptop.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  //   {image: '../../images/laptop2.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  //   {image: '../../images/cpu.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  //   {image: '../../images/cpu2.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  //   {image: '../../images/apple.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  //   {image: '../../images/build.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  //   {image: '../../images/gaming-monitor.png', title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...', price: '$499.00},
  // ]
  return (
    <div className='products'>
      <img src={hero} alt='products hero im' />
      <div>
        <div className='product-title'>
          <h1>New Product</h1>
          <a href='/'>See all new products</a>
        </div>
        <div className='product-block'>
          {/* {products.map((product, index) => (
            <ProductBadge key={index} image={product.image} title={product.title} price={product.price} />
          ))} */}
          {products.map((product) => (
            <div key={product._id}>
            <Link to='/productId' className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={product.photo1} alt='product' />
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
          {/* <Link to='/productId' className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop1} alt='product' />
            <div className='review'>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </Link> */}

          {/* <div className='product-badge'>
          <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={cpu1} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div> */}
{/* 
          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div> */}

          {/* <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={cpu2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div> */}

          {/* <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop1} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={cpu1} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div> */}
      </div>
    </div>

    {/* laptop */}
    {/* <div>
      <div className='product-title'>
         <div className='link-laptop'>
            <a href='/'>Laptops</a>
            <a href='/'>Regular Laptops</a>
            <a href='/'>Gaming laptops</a>
          </div> 
          <a href='/'>See all new products</a>
        </div>
        <div className='product-block'>
          <div className='back-tag'>
            <h2>MSI Laptops</h2>
            <a href='/'>See all new products</a> 
          </div>
          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
          <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>
          </div>
    </div> */}

    {/* laptop and cpu */}
        {/* <div className='product-block'>
        <div className='back-tag'>
            <h2>Laptops</h2>
            <a href='/'>See all new products</a> 
          </div>   
          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop1} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
          <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={cpu1} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={cpu2} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={laptop1} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>
    </div> */}

    {/* gaming monitors */}
        {/* <div className='product-block'>
        <div className='back-tag'>
            <h2>Gaming Monitors</h2>
            <a href='/'>See all new products</a> 
          </div>
          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={monitorG} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
          <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={monitorG} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={monitorG} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={monitorG} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={monitorG} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>
      </div> */}

      {/* custome build */}
      {/* <div className='product-block'>
      <div className='back-tag'>
            <h2>Custome builds</h2>
            <a href='/'>See all new products</a> 
          </div>
          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={beta} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
          <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={alpha} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={beta} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={alpha} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p>
          </div>

          <div className='product-badge'>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} color='#78A962'/>
              <span className='stock'>In stock</span>
            </div>
            <img src={beta} alt='product' />
            <div className='review'>
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'star' : ''}/>
              ))}
            <span>Review 4</span>
            </div>
            <p className='details'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p className='strike'>$499.00</p>
            <p>$499.00</p> */}
          {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Products;