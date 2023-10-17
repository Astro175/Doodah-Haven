import './payment.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const Payment = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);
    const [activeLink, setActiveLink] = useState('Payment'); // State to track the active link
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedState, setSelectedState] = useState('');


    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    }

    const states = ['', 'Lagos', 'Abuja', 'Kano', 'Ogun', 'Oyo', 'Enugu', 'Kwara', 'Imo', 'Anambra', 'Delta',
    'Cross-River', 'Akwa-Ibom', 'Rivers', 'Bayelsa', 'Kaduna', 'Abuja', 'Jos', 'Adamawa', 'Ebonyi', 'Abia']
    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handleClick = (link) => {
        setActiveLink(link);
    }
   
    useEffect(() => {
        setCartItems(cart)
    }, [cart]);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    const calculateSalesTax = () => {
        return calculateTotalPrice() * 0.02;
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
                    <p>Sales tax (2%) <span>N{calculateSalesTax()}</span></p>
                    <hr />
                    <p>Shipping fee <span className='free'>FREE</span></p>
                    <hr />
                    <p>Total due <span>N{totalDue}</span></p>
                </div>
            </div>
            <div className='pay-ship'>
            <div className='payment-link'>
            <Link className={activeLink === 'Shipping' ? 'active-link' : 'link'} onClick={() => setActiveLink('Shipping')}>
                Shipping
                </Link>
                -- <FontAwesomeIcon icon={faCheckCircle} /> ---

                <Link className={activeLink === 'Delivery' ? 'active-link' : 'link'} onClick={() => setActiveLink('Delivery')}>
                Delivery
                </Link>
                -- <FontAwesomeIcon icon={faCheckCircle} /> ---

                <Link className={activeLink === 'Payment' ? 'active-link' : 'link'} onClick={() => setActiveLink('Payment')}>
                Payment
                </Link>
            </div>

                <div className='toPay'>
                    {activeLink === 'Shipping' && (
                        <div>
                            <form>
                                <div className='shipment-form'>
                                    <h2>Contact Details</h2>
                                    <label htmlFor='firstname'>Firstname:</label><br />
                                    <input type='text' name='firstname' />

                                    <label htmlFor='lastname'>Lastname:</label>
                                    <input type='text' name='lastname' /><br />

                                    <label htmlFor='email'>Email:</label><br />
                                    <input type='email' name='email' /><br />

                                    <label htmlFor='number'>Phone number:</label><br />
                                    <PhoneInput value={phoneNumber} defaultCountry='NG' onChange={handlePhoneNumberChange} id='number'/>
                                </div>

                                <div className='shipment-form'>
                                    <h2>Shipping Details</h2>
                                    <label htmlFor='addressNo'>Flat/House no.:</label><br />
                                    <input type='number' name='addressNo' /><br />

                                    <label htmlFor='address'>Address:</label><br />
                                    <input type='text' name='address' /><br/>

                                    <label htmlFor='city'>City:</label><br />
                                    <input type='text' name='city' />

                                    <label htmlFor='state'>State:</label><br />
                                    {/* <input type='text' name='state' /> */}
                                    <select id='state' name='state' value={selectedState} onChange={handleStateChange}>
                                    {/* <option value='' disabled>Select a state</option> */}
                                        {states.map((state, index) => {
                                           return (
                                            <option key={index} value={state}>
                                                {state}
                                            </option>
                                           )
                                        })}
                                    </select>

                                    <label htmlFor='code'>Postal Code:</label><br />
                                    <input type='number' name='code' />

                                    <label htmlFor='landmark'>Famous Landmark:</label><br />
                                    <input type='text' name='landmark' /><br />

                                    <input type='checkbox' name='check' />
                                    <label htmlFor='check' className='checkbox'>My shipping and Billing address are the same</label>
                                </div>
                                <button type='submit' onClick={() => handleClick('Delivery')}>Continue to Delivery</button>
                            </form>

                            
                        </div>
                    )};

                    {activeLink === 'Delivery' && (
                            <div>
                        <form className='payment-form'>
                            <h2>Delivery Options</h2>
                            <input type="radio" id="outsideLagos" name="outsideLagos" value="Outside lagos" />
                            <label for="outsideLagos">Outside Lagos Home Delivery via DHL usually takes between 5 - 7 working days
                                <p>Pay with cash</p>
                            </label><br />
                            
                            <input type="radio" id="withinLagos" name="withinLagos" value="Within Lagos" />
                            <label for="withinLagos">Within Lagos usually takes 4 to 5 working days
                            <p>Delivery is free</p>
                            </label><br />
                            
                            <input type="radio" id="park" name="park" value="Park pickup" />
                            <label for="park">Outside Lagos Park pick up usually takes 5 to 6 working days
                                <p>Pay with cash at the park</p>
                            </label><br />
                        </form>
                        <button className='back-btn' onClick={() => handleClick('Shipping')}>
                            Back
                        </button>
                        <button className='makePayment-btn' onClick={() => handleClick('Payment')}>Continue to payment</button>
                        </div>
                    )}


                    {activeLink === 'Payment' && (
                        <div>
                    <form className='payment-form'>
                        <h2>Payment Method</h2>
                        <input type="radio" id="delivery" name="payment_method" value="Pay online" />
                        <label for="delivery">Paystack
                            <p>Pay online using your Visa/Mastercard</p>
                        </label><br />
                        
                        {/* <input type="radio" id="credit" name="payment_method" value="Credit/Debit card" />
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
                        </label><br /> */}
                    </form>
                    <button className='back-btn' onClick={() => handleClick('Delivery')}>Back</button>
                    <button className='makePayment-btn'>Pay N{totalDue}</button>
                    </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Payment