import React, { Component } from 'react';
import Price from '../product/ProPrice';
import FieldQty from '../product/FieldQty'
import ProImage from '../product/ProImage';
import ProName from '../product/ProName';

export default class CartLeft extends Component {
    render() {
        return (
            <div className='cart-table-wrapper'>
                <table className='shopping-cart-table'>
                    <thead>
                        <tr>
                            <th className='col item'>Product</th>
                            <th className='col price'>Price</th>
                            <th className='col qty'>Quantity</th>
                            <th className='col subtotal'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className='cart-item'>
                        <tr className='item-info'>
                            <td className='col item'>
                                <ProImage></ProImage>
                                <div className='product-item-details'>
                                    <ProName></ProName>
                                    <div className='product-item-action'>
                                        <span class="material-icons">mode_edit_outline</span>
                                        <span class="material-icons">delete</span>
                                    </div>
                                </div>
                            </td>
                            <td className='col price'><Price params={{ type: 0 }}></Price></td>
                            <td className='col qty'><FieldQty></FieldQty></td>
                            <td className='col subtotal'><Price params={{ type: 0 }}></Price></td>
                        </tr>
                        <tr className='item-info'>
                            <td className='col item'>
                                <ProImage></ProImage>
                                <div className='product-item-details'>
                                    <ProName></ProName>
                                    <div className='product-item-action'>
                                        <span class="material-icons">mode_edit_outline</span>
                                        <span class="material-icons">delete</span>
                                    </div>
                                </div>
                            </td>
                            <td className='col price'><Price params={{ type: 0 }}></Price></td>
                            <td className='col qty'><FieldQty></FieldQty></td>
                            <td className='col subtotal'><Price params={{ type: 0 }}></Price></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

