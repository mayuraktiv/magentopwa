import React, { useContext } from 'react';
import CartContext from '../controllers/contexts/cart/cartContext';

const PriceSummary = () => {
    const { cart_details } = useContext(CartContext);
    return (
        <ul className="cart_price_listing">
            <li>
                <span>Price ({cart_details.total_quantity} item)</span>
                <strong>{cart_details.prices.subtotal_including_tax.currency} {cart_details.prices.subtotal_including_tax.value}</strong>
            </li>
            {cart_details.prices.applied_taxes?.map(tax => (
                <li>
                    <span>{tax.label}</span>
                    <strong>{tax.amount.currency} {tax.amount.value}</strong>
                </li>
            ))}
            {cart_details.prices.discounts?.map(discount => (
                <li>
                    <span>{discount.label}</span>
                    <strong>{discount.amount.currency} {discount.amount.value}</strong>
                </li>
            ))}
            <li className="price_total_row">
                <strong>Total Payable Amount</strong>
                <strong>{cart_details.prices.grand_total.currency} {cart_details.prices.grand_total.value}</strong>
            </li>
        </ul>
    );
}

export default PriceSummary;