import React, { useContext } from 'react';
import CartContext from '../controllers/contexts/cart/cartContext';

const CartRight = () => {
    const { cart_details } = useContext(CartContext);
    return (
        <div className='cart-totals'>
            <table>
                <tbody>
                    <tr className='total sub'>
                        <th>Subtotal</th>
                        <td>{cart_details.prices.subtotal_including_tax.currency} {cart_details.prices.subtotal_including_tax.value}</td>
                    </tr>
                    {cart_details.prices.applied_taxes?.map(tax => (
                        <tr className='total tax'>
                            <th>{tax.label}</th>
                            <td>{tax.amount.currency} {tax.amount.value}</td>
                        </tr>
                    ))}
                    {cart_details.prices.discounts?.map(discount => (
                        <tr className='total tax'>
                            <th>{discount.label}</th>
                            <td>{discount.amount.currency} {discount.amount.value}</td>
                        </tr>
                    ))}
                    <tr className='total grand'>
                        <th>Order Total</th>
                        <td><strong>{cart_details.prices.grand_total.currency} {cart_details.prices.grand_total.value}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div className='action checkout'>
                <button className="btn btn-default">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default CartRight;