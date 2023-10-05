import React from 'react';
import './home.scss';
import rectangleDrone from '../../images/Rectangle-drone.png';
import drone from '../../images/drone.png';
import HomeProducts from './homeProducts'
import Partners from './partner';


const Home = () => {
  return (
    <div className='homepage'>
      <div className='hero-section'>
        <div className='hero-text'>
          <h1>Best selling products</h1>
          <p>We have offered affordable products to customers who always come back to buy more of this products.</p>
          <button>Shop here</button>
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

      </div>
      <Partners />
    </div>
  );
};

export default Home;