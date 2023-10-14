import React from 'react';
import './home.scss';
import rectangleDrone from '../../images/Rectangle-drone.png';
import drone from '../../images/drone.png';
import HomeProducts from './homeProducts'
import Partners from './partner';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='homepage'>
      <div className='hero-section'>
        <div className='hero-text'>
          <h1>Best selling products</h1>
          <p>We have offered affordable products to customers who always come back to buy more of this products.</p>
          <button>
            <Link className='shop-link' to='/products'>
            Shop here
            </Link>
          </button>
        </div>

       

        <div className='img-section'>
         <div className='rectangle'>
          <img src={rectangleDrone} alt='rectangle drone' className='rec-drone' />
          <img src={drone} alt='drone-img' className='dron'/>
         </div>
        </div>
      </div>

      <HomeProducts />
      
      <Partners />
      <div className='block'>
        <h2>Best Sellers</h2>
        <div className='boxes'>
          <div className='box'>
            <h3>Laptop</h3>
          </div>

          <div className='box'>
            <h3>Monitor</h3>
          </div>

          <div className='box-white'>
            <h3>Tablet</h3>
          </div>

          <div className='box-white'>
            <h3>Camera</h3>
          </div>

          <div className='box'>
            <h3>Laptop</h3>
          </div>

          <div className='box'>
            <h3>Monitor</h3>
          </div>

          <div className='box-white'>
            <h3>Tablet</h3>
          </div>

          <div className='box-white'>
            <h3>Camera</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;