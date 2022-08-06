import React, { Component } from 'react';

export default function CheckoutCouponCode() {
    const [show, setShow] = React.useState();
    return (
        <form className='form form-discount' id='discount-form'>
            <div className='payment-option-title' onClick={() => setShow(!show)}>
                <span className={`action ${show ? "show" : ""}`}><span>Use Coupon Code</span></span>
            </div>
            <div className={`payment-option-content ${show ? "show" : ""}`}>
                <div className='payment-option-inner'>
                    <div className='field'>
                        <div className='control'>
                            <input type='text' className='input-text' id='discount-code' placeholder='Enter Coupon Code'></input>
                        </div>
                    </div>
                </div>
                <div className='action-toolbar'>
                    <div className='primary'>
                        <div className='btn btn-default btn-bg action-apply'>Apply</div>
                    </div>
                </div>
            </div>
        </form>
    )  
}

