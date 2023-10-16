import './payment.scss';

export const PaymentType = () => {
    return (
        <div classsName='toPay'>
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
                    
                    

                </div>
    )
}