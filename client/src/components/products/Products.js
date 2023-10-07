import React from 'react';
import hero from '../../images/hero2.png';
import laptop1 from '../../images/laptop.png';
import laptop2 from '../../images/laptop2.png';


const Products = () => {
  return (
    <div>
      <img src={hero} alt='products hero image' />
      <div>
        <h1>New Product</h1>
        <div>
          <span>In stock</span>
          <img src={laptop1} alt='product' />
          <p>
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </p>
          <p>
          $499.00
          </p>
          <p>$499.00</p>
        </div>
    </div>
    </div>
  );
};

export default Products;