import './details.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useContext, useState, useEffect } from 'react';
import CartPopup from '../cart/CartPopup';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const { isLoggedIn } = useContext(AuthContext);
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        // Fetch product data based on the productId
        fetch(`http://localhost:4000/api/products/${productId}`)
          .then((response) => response.json())
          .then((data) => setProduct(data))
          .catch((error) => console.error('Error fetching product', error));
      }, [productId]);

      if (!product) {
        return <div>Loading...</div>;
      }


    const handleAddToCart = () => {
        if (!isLoggedIn) {
            alert('Please log in before adding to cart.');
            return;
        }
        
        const selectedItem = {
            img: product.photo1, 
            name: product.name,
            price: product.price,
            quantity,
            details: product.details,
          };
        setShowPopup(true);
          addToCart(selectedItem);
        }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const arrayBufferToBase64 = (buffer) => {
        const binary = [];
        const bytes = new Uint8Array(buffer);
        bytes.forEach((byte) => binary.push(String.fromCharCode(byte)));
        return window.btoa(binary.join(''));
      }

    return(
        <div className='productDetails'>
            {showPopup && <CartPopup />}
            <div className='product-block'>
                <img src={`data:image/jpeg;base64,${arrayBufferToBase64(product.photo1.data.data)}`} alt='product' />
                <div className='details-block'>
                    <div className='cartLinks'>
                        <Link to="/" className='cart-link'>Home</Link>
                        <FontAwesomeIcon icon={faGreaterThan} size='xs' className='caret-icon' />
                        <Link to='/products' className='cart-link'>Product</Link>
                        < FontAwesomeIcon icon={faGreaterThan} size='xs' className='caret-icon' />
                        <Link to='/products' className='cart-link'>{product.name}</Link>
                    </div>
                    <div className='main-details'>
                        <h2>{product.name}</h2>
                        <div className='review'>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className='star'/>
                            ))}
                        <span>2 Reviews</span>
                        </div>
                        <p className='details'>
                            {product.description}
                        </p>
                        <div className='quantity'>
                            <p>Quantity</p>
                            <div className='items'>
                                <button onClick={decreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity}>+</button> 
                            </div>
                        </div>
                        <p className='strike'>NGN {product.price}</p>
                        <p>NGN {product.price}</p>
                        <button className='addCart' onClick={handleAddToCart}>
                            <FontAwesomeIcon icon={faCartShopping} size='xs' color='#fff' className='cart-icon'/>
                            Add To Cart
                            {/* <Link to='/cart' className='cartLink'>Add to Cart</Link> */}
                        </button>

                        
                    </div>
                </div>
            </div>

            {/* <h3>Description</h3>
            <hr />
            <ul className='det'>
                <li>Thin Bezel Intel 10th Gen i7 10875H.</li>
                <li>16GB RAM - 1TB SSD NVME</li>
                <li>Windows 10 PRO Laptop</li>
            </ul> */}
            
        
    </div>
    )
};

export default ProductDetails
