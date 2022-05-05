import React, { Component } from 'react';
import classnames from 'classnames';

import CartItemPopup from './CartItemPopup';

import '../style/base.scss';

export default class CartBody extends Component {
    render() {
        return (
            <div className={classnames('card-body', this.props.className)}>
                <ul className="cart_item_listing pl-0">
                    <CartItemPopup />
                    <CartItemPopup />
                </ul>
            </div >
        );
    }
}