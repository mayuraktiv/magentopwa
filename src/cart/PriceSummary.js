import React, { Component } from 'react';

export default class PriceSummary extends Component {
    render() {
        return (
            <ul className="cart_price_listing">
                <li>
                    <span>Price (2 item)</span>
                    <strong>$1200.00</strong>
                </li>
                <li>
                    <span>Delivery Charges</span>
                    <strong>$40.00</strong>
                </li>
                <li className="price_total_row">
                    <strong>Total Payable Amount</strong>
                    <strong>$2440.00</strong>
                </li>
            </ul>
        );
    }
}