import React, { Component } from 'react';

export default class CheckoutHeader extends Component {
    render() {
        return (
            <div className='checkout_steps_header'>
               <div className='checkout_steps checkout_step1 active'>
                    <span className='checkout_steps_inner'><span class="material-symbols-rounded">person</span></span>
                    <div className='checkout_step_title'>Login</div>
               </div>
               <div className='checkout_steps checkout_step2'>
                    <span className='checkout_steps_inner'><span class="material-symbols-rounded">pin_drop</span></span>
                    <div className='checkout_step_title'>Shipping Address</div>
               </div>
               <div className='checkout_steps checkout_step3'>
                    <span className='checkout_steps_inner'><span class="material-symbols-rounded">local_shipping</span></span>
                    <div className='checkout_step_title'>Shipping Method</div>
               </div>
               <div className='checkout_steps checkout_step4'>
                    <span className='checkout_steps_inner'><span class="material-symbols-rounded">account_balance_wallet</span></span>
                    <div className='checkout_step_title'>Payment Method</div>
               </div>
            </div>
        );
    }
}

