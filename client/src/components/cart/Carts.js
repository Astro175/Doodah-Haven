import './cart.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faDumpster } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cartDetails'>
                <div className='cartLinks'>
                    <Link to="/" className='cart-link'>Home</Link>
                    < FontAwesomeIcon icon={faGreaterThan} size='xs' className='caret-icon' />
                    <Link to='/cart' className='cart-link'>Cart</Link>
                </div>
                <h1>Cart</h1>
                <div className='table-scrol'>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MacBook</td>
                            <td>N160,000.00</td>
                            <td className='items'>
                                <button>-</button>
                                    <span>1</span>
                                <button>+</button>
                            </td>
                            <td>N160,000.00</td>
                            <td>
                                <FontAwesomeIcon icon={faDumpster} />
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                </div>
                <button className='clear'>Clear Cart</button>

            </div>

            <div className='payCart'>
                <div className='total'>
                    <p>Subtotal</p>
                    <p>N160,000.00</p>
                </div>
                <p className='shipfee'>Shippings fees are free</p>
                <button>
                    <Link to='/payment' className='ship-link'>
                        Proceed to checkout
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Cart