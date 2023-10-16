import './payment.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Payment = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);
    const [activeLink, setActiveLink] = useState('Payment'); // State to track the active link


   
    useEffect(() => {
        setCartItems(cart)
    }, [cart]);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    const calculateSalesTax = () => {
        return calculateTotalPrice() * 0.065;
    };
      
    const totalDue = calculateTotalPrice() + calculateSalesTax();

    const handleDeleteItem = (index) => {
        removeFromCart(index);
    }

    return (
        <div className='payment'>
            <div className='order'>
                <a href='/cart'>
                    <FontAwesomeIcon icon={faArrowLeft} className='arrow'/>
                    Back
                </a>

                <h2>Order Summary</h2>
                {cartItems.map((item, index) => (
                <div className='summary' key={index}>
                    <div className='order-box'>     
                        <img src={item.img} alt='order icon' />
                        <div className='items'>
                            <p className='itemname'>{item.name}</p>
                            <p className='qty'>Quantity: {item.quantity} item(s)</p>
                        </div>
                    </div>
                    <div className='price-box'>
                        <p>N{item.price}</p>
                        <FontAwesomeIcon icon={faTrash} size='xs' onClick={() => handleDeleteItem(index)} cursor='pointer' />
                    </div>
                </div>     
                ))}

                <div className='otherDetails'>
                    <form className='discount'>
                        <label htmlFor='gift'>Gift Card / Discount code</label><br />
                        <input type='text' name='gift' />
                        <button type='submit'>Apply</button>
                    </form>

                    <p>Subtotal <span>N{calculateTotalPrice()}</span></p>
                    <hr />
                    <p>Sales tax (6.5%) <span>N{calculateSalesTax()}</span></p>
                    <hr />
                    <p>Shipping fee <span className='free'>FREE</span></p>
                    <hr />
                    <p>Total due <span>N{totalDue}</span></p>
                </div>
            </div>
            <div className='pay-ship'>
            <div className='payment-link'>
                <Link className={activeLink === 'Payment' ? 'active-link' : 'link'} onClick={() => setActiveLink('Payment')}>
                Payment
                </Link>
                -- <FontAwesomeIcon icon={faCheckCircle} /> ---

                <Link className={activeLink === 'Shipping' ? 'active-link' : 'link'} onClick={() => setActiveLink('Shipping')}>
                Shipping
                </Link>
                -- <FontAwesomeIcon icon={faCheckCircle} /> ---

                <Link className={activeLink === 'Delivery' ? 'active-link' : 'link'} onClick={() => setActiveLink('Delivery')}>
                Delivery
                </Link>
          </div>

                <div className='toPay'>
                    {activeLink === 'Payment' && (
                        <div>
                    <form className='payment-form'>
                        <h2>Payment Method</h2>
                        <input type="radio" id="delivery" name="payment_method" value="Pay on delivery" />
                        <label for="delivery">Pay on Delivery
                            <p>Pay with cash on delivery</p>
                        </label><br />
                        
                        <input type="radio" id="credit" name="payment_method" value="Credit/Debit card" />
                        <label for="credit">Credit / Debit card
                            <p>Pay with your Credit / Debit Card</p>
                        </label><br />
                        
                        <input type="radio" id="transfer" name="payment_method" value="Direct Bank Transfer" />
                        <label for="transfer">Direct Bank Transfer
                            <p>Make payment directly through bank account.</p>
                        </label><br />

                        <input type="radio" id="others" name="payment_method" value="Other Payment Method" />
                        <label for="others">Other payment method
                            <p>Make payment through Gpay, Paypal, Paytm etc</p>
                        </label><br />
                    </form>
                    <button className='back-btn'>Back</button>
                    <button className='makePayment-btn'>Pay N{totalDue}</button>
                    </div>
                    )}

                    {activeLink === 'Shipping' && (
                        <div>
                            <form>
                                <div>
                                    <h2>Contact Details</h2>
                                    <label htmlFor='firstname'>Firstname</label>
                                    <input type='text' name='firstname' />

                                    <label htmlFor='lastname'>Lastname:</label>
                                    <input type='text' name='lastname' /><br />

                                    <label htmlFor='email'>Email:</label>
                                    <input type='email' name='email' /><br />

                                    <label htmlFor='number'>Phone number:</label>
                                    <input type='number' name='number' /><br />
                                </div>

                                <div>
                                    <h2>Shipping Details</h2>
                                    <label htmlFor='addressNo'>Flat/House no.</label>
                                    <input type='number' name='addressNo' /><br />

                                    <label htmlFor='address'>Address</label>
                                    <input type='text' name='address' /><br/>

                                    <label htmlFor='city'>City</label>
                                    <input type='text' name='city' />

                                    <label htmlFor='state'>State</label>
                                    <input type='text' name='state' />

                                    <label htmlFor='code'>Postal Code</label>
                                    <input type='number' name='code' />

                                    <label htmlFor='landmark'>Famous Landmark</label>
                                    <input type='text' name='landmark' />

                                    <input type='check' name='check' />
                                    <label htmlFor='check'>My shipping and Billing address are the same</label>
                                </div>
                                <button type='submit'>Continue</button>
                            </form>

                            
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Payment