import './details.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import laptop1 from '../../images/laptop.png';
import { CartContext } from '../cart/CartContext';
import { useContext } from 'react';


const ProductDetails = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const selectedItem = {
            name: 'MSI Creator 17',
            price: 499.0,
            quantity: 1,
            details: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop'
          };
      
          addToCart(selectedItem);
    }
    return (
        <div className='productDetails'>
            <div className='product-block'>
                <img src={laptop1} alt='product' />
                <div className='details-block'>
                    <div className='cartLinks'>
                        <Link to="/" className='cart-link'>Home</Link>
                        <FontAwesomeIcon icon={faGreaterThan} size='xs' className='caret-icon' />
                        <Link to='/products' className='cart-link'>Product</Link>
                        < FontAwesomeIcon icon={faGreaterThan} size='xs' className='caret-icon' />
                        <Link to='/products' className='cart-link'>ProductName</Link>
                    </div>
                    <div className='main-details'>
                        <h2>MSI Creator 17</h2>
                        <div className='review'>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className='star'/>
                            ))}
                        <span>2 Reviews</span>
                        </div>
                        <p className='details'>
                            MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop
                        </p>
                        <div>
                            <p>Quantity: 1</p>
                        </div>
                        <p className='strike'>$499.00</p>
                        <p>$499.00</p>
                        <button className='addCart' onClick={handleAddToCart}>
                            <FontAwesomeIcon icon={faCartShopping} size='xs' color='#fff'/>
                            <Link to='/cart' className='cartLink'>Add to Cart</Link>
                        </button>
                    </div>
                </div>
            </div>

            <h3>Description</h3>
            <hr />
            <ul className='det'>
                <li>Thin Bezel Intel 10th Gen i7 10875H.</li>
                <li>16GB RAM - 1TB SSD NVME</li>
                <li>Windows 10 PRO Laptop</li>
            </ul>
            
        
    </div>
    )
};

export default ProductDetails