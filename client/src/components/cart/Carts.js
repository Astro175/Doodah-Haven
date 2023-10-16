import './cart.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    
    const [quantities, setQuantities] = useState(Array(cart.length).fill(1));


    const increase = (index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] += 1;
        setQuantities(updatedQuantities);
    }

    const decrease = (index) => {
        if (quantities[index] > 1) {
            const updatedQuantities = [...quantities];
            updatedQuantities[index] -= 1;
            setQuantities(updatedQuantities);
        }
    }

    const calculateSubtotal = (item) => {
        return item.price * quantities[cart.indexOf(item)];
    };

    const totalSubtotal = cart.reduce((total, item) => total + calculateSubtotal(item), 0);

    const handleDeleteItem = (index) => {
        removeFromCart(index);
    }

    const handleClearCart = () => {
        clearCart();
    }
    return (
        <div className='cart'>
            <div className='cartLinks'>
                    <Link to="/" className='cart-link'>Home</Link>
                    < FontAwesomeIcon icon={faGreaterThan} size='xs' className='caret-icon' />
                    <Link to='/cart' className='cart-link'>Cart</Link>
            </div>
            <h1>Cart</h1>
                {cart.length === 0 ? (
                        <div className='emptyCart-message'>
                            <p>Shopping Cart is empty</p>
                            <p>Your shopping cart is empty <Link to='/products' className='shoppingCartLink'>Continue shopping</Link></p>
                        </div>
                    ) : (
                    <div>
                    <div className='cartDetails'>
                        
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
                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>N{item.price}</td>
                                            <td className='items'>
                                                <button onClick={() => decrease(index)}>-</button>
                                                <span>{quantities[cart.indexOf(item)]}</span>
                                                <button onClick={() => increase(index)}>+</button> 
                                            </td>
                                            <td>N{calculateSubtotal(item)}</td>
                                            <td>
                                                <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteItem(index)} cursor='pointer'/>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* <tr>
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
                                    </tr> */}
                                </tbody>
                                
                            </table>
                    
                    </div>
                    <button className='clear' onClick={handleClearCart}>Clear Cart</button>

                </div>

                <div className='payCart'>
                    <div className='total'>
                        <p>Subtotal</p>
                        <p>N{totalSubtotal}</p>
                    </div>
                    <p className='shipfee'>Shippings fees are free</p>
                    <button>
                        <Link to='/payment' className='ship-link'>
                            Proceed to checkout
                        </Link>
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

export default Cart