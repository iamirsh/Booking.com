import React from 'react'
import './checkoutPage.css';

// Irshad Ahmad
export const CheckoutPage = () => {
    return (
        <div className='checkoutSection'>
            <div className="fareSection">
                <h6>Fare Summary</h6>
                <div className='fareSec'>
                    <p>Base Fare</p>
                    <p>₹5,257</p>
                </div>
                <div className='fareSec'>
                    <p>Fee & Surcharges</p>
                    <p>₹740</p>
                </div>
                <div className='fareSec'>
                    <p>Total Amount</p>
                    <p>₹5,997</p>
                </div>
            </div>
            <div className="paymentSection">
                <h6>Payment Method</h6>
                <input type="text" placeholder='Name on card'/>
                <input type="text" placeholder='Card Number'/>
                <input type="text" placeholder='Expiry Date'/>
                <input type="text" placeholder='CVV'/>
                <button className='btn btn-primary'>Pay</button>
            </div>
        </div>
    )
}
