import './payment.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// import ordImg from '../../images/order.png';
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Payment = () => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (location.state && location.state.cartItems) {
            console.log('Cart Items:', location.state.cartItems);
            setCartItems(location.state.cartItems);
        }
    }, [location.state])
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
                        <p>{item.name}</p>
                        <div className='noitems'>
                            <p>Quantity: {item.quantity} item(s)</p>
                        </div>
                    </div>
                </div>
                <div className='price-box'>
                    <p>{item.price}</p>
                    <FontAwesomeIcon icon={faTrash} size='xs' />
                </div>
                </div>     
                ))}
                    
                

                {/* <div className='summary'>
                    <div className='order-box'>
                        <img src={ordImg} alt='order icon' />
                        <div className='items'>
                            <p>Pure Set</p>
                            <div className='noitems'>
                                <button className='reduceNo'>-</button>
                                <span>1</span>
                                <button className='addNo'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='price-box'>
                        <p>$65.00</p>
                        <FontAwesomeIcon icon={faDumpster} size='xs' />
                    </div>
                </div> */}
                

                <div className='otherDetails'>
                    <form className='discount'>
                        <label htmlFor='gift'>Gift Card / Discount code</label><br />
                        <input type='text' name='gift' />
                        <button type='submit'>Apply</button>
                    </form>

                    <p>Subtotal <span>$160.00</span></p>
                    <hr />
                    <p>Sales tax (6.5%) <span>$4.23</span></p>
                    <hr />
                    <p>Shipping fee <span className='free'>FREE</span></p>
                    <hr />
                    <p>Total due <span>$164.23</span></p>
                </div>
            </div>
            <div className='pay-ship'>
                <div className='payment-link'>
                    <Link className='link'>Payment</Link>
                    -- <FontAwesomeIcon icon={faCheckCircle} /> ---

                    <Link className='link'>Shipping</Link>
                    -- <FontAwesomeIcon icon={faCheckCircle} /> ---

                    <Link className='link'>Delivery</Link>
                </div>

                <div className='toPay'>
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
                    <button className='makePayment-btn'>Pay $164.23</button>
                    

                </div>
            </div>
        </div>
    )
}

export default Payment