import React, { Component } from 'react';

export default class CartRight extends Component {
    render() {
        return (
            <div className='cart-totals'>
                <table>
                    <tbody>
                        <tr className='total sub'>
                            <th>Subtotal</th>
                            <td>$148.00</td>
                        </tr>
                        <tr className='total tax'>
                            <th>Tax</th>
                            <td>$0.00</td>
                        </tr>
                        <tr className='total grand'>
                            <th>Order Total</th>
                            <td><strong>$148.00</strong></td>
                        </tr>
                    </tbody>
                </table>
                <div className='action checkout'>
                    <button className="btn btn-default">Proceed to Checkout</button>
                </div>
            </div>
        );
    }
}

