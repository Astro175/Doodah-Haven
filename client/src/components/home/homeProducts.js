import React, { useState } from "react";
import iPhone from '../../images/iphone-x.png';
import dji from '../../images/dji-mavic-pro.png';
import applePad from '../../images/apple-ipad-pro.png';
import appleWatch from '../../images/apple-watch.png';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

const HomeProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 6;

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    // };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    }
   
    return (
        <div className='products-display'>
            <h2>Products</h2>

            <div className="package-slide" style={{ transform: `translateX(${-currentSlide * (100 / totalSlides)}%)`}}>
            <button onClick={nextSlide} className="nav-btn left">
                    <FontAwesomeIcon icon={faLessThan} />
                </button>
            
                <div className="package">
                    <h3>Iphone X</h3>
                    <img src={iPhone} alt="iphone" />
                    <p className="details">Gadget details</p>
                    <div className="product-price">
                        <p>Price </p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                    </div>
                </div>

                <div className="package">
                    <h3>DJI Mavic Pro</h3>
                    <img src={dji} alt="dji-mavic" />
                    <p className="details">Gadget details</p> 
                    <div className="product-price">
                        <p>Price </p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                    </div>
                </div>

                <div className="package-white">
                    <h3>Apple Ipad Pro</h3>
                    <img src={applePad} alt="apple ipad pro" />
                    <p className="details">Gadget details</p>  
                    <div className="product-price">
                        <p>Price </p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                    </div>
                </div>

                <div className="package-white">
                    <h3>Apple Watch Series 5</h3>
                    <img src={appleWatch} alt="Apple Watch Series 5" />
                    <p className="details">Gadget details</p>
                    <div className="product-price">
                        <p>Price </p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                    </div>
                </div>

                <button onClick={nextSlide} className="nav-btn right">
                    <FontAwesomeIcon icon={faGreaterThan} />
                </button>
                

                <div className="package-white">
                    <h3>Apple Watch Series 5</h3>
                    <img src={appleWatch} alt="Apple Watch Series 5" />
                    <p className="details">Gadget details</p>
                    <div className="product-price">
                        <p>Price </p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                    </div>
                </div>



                <div className="package-white">
                    <h3>Apple Watch Series 5</h3>
                    <img src={appleWatch} alt="Apple Watch Series 5" />
                    <p className="details">Gadget details</p>
                    <div className="product-price">
                        <p>Price </p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
                    </div>
                </div>

                
            </div> 

            <div className="navigation">

                <div className="slide-dash">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div key={index} className={`dash ${currentSlide === index ? 'active': ''}`}
                        onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>

               
            </div>
      </div>
    )

}

export default HomeProducts;