import React, { Component } from 'react';
import ProName from '../product/ProName';
import ProImage from '../product/ProImage';
import Price from '../product/ProPrice';

export default class CheckoutSummary extends Component {
    render() {
        return (
            <div className='checkout_order_summary'>
                <h6 className='checkout_summary_title'>Summary</h6>
                <ul className='cart_order_summary'>
                    <li className='cart_order_summary_item'>
                        <div className='cart_order_summary_item_img'>
                            <ProImage></ProImage>
                        </div>
                        <div className='cart_order_summary_item_info'>
                            <ProName></ProName>
                            <div className='product_qty'>
                                <span className='qty_title'>Qty:</span><span className='qty_value'>2</span>
                            </div>
                            <Price params={{ type: 0 }}></Price>
                        </div>
                    </li>
                    <li className='cart_order_summary_item'>
                        <div className='cart_order_summary_item_img'>
                            <ProImage></ProImage>
                        </div>
                        <div className='cart_order_summary_item_info'>
                            <ProName></ProName>
                            <div className='product_qty'>
                                <span className='qty_title'>Qty:</span><span className='qty_value'>2</span>
                            </div>
                            <Price params={{ type: 0 }}></Price>
                        </div>
                    </li>
                </ul>
                <div className='cart_price_total_container'>
                    <div className='cart_total'>
                        <div className='cart_price_title'>Subtotal(1 Items)</div>
                        <div className='cart_price_amount'>$ 2400</div>
                    </div>
                    <div className='cart_total'>
                        <div className='cart_price_title'>Discount</div>
                        <div className='cart_price_amount'>$ 448</div>
                    </div>
                    <div className='cart_total'>
                        <div className='cart_price_payable_title'>Amount Payable</div>
                        <div className='cart_price_payable_amount'>$ 1952</div>
                    </div>
                </div>
            </div>
        );
    }
}

