import React, { Component } from 'react';

export default class CheckoutShippingMethod extends Component {
    render() {
        return (
            <div className='shipping_method'>
                <div className='custom_radio_box'>
                    <input type='radio' id='flatrate'></input>
                    <label className='custom_radio_label' for='flatrate'>
                        <span className='checkout_fixed_rate'>$ 5</span>
                        <span>Fixed Flat Rate</span>
                    </label>
                </div>
            </div>
        );
    }
}
