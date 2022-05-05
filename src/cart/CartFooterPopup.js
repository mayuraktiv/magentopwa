import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class CartFooter extends Component {
    render() {
        return (
            <div className={classnames('cart-footer card-footer', this.props.className)}>
                <div className="cart_footer_btns">
                    <Link to="/" className="btn btn-default">Continue Shopping</Link>
                    <Link to="/" className="btn btn-default">Place Order</Link>
                </div>
            </div >
        );
    }
}