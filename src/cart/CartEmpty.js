import React, { Component } from 'react';
import classnames from 'classnames';

import EmptyCartImage from '../images/empty-cart.png';

export default class CartEmpty extends Component {
    render() {
        return (
            <div className={classnames('empty-cart', this.props.className)}>
                <div className='empty-cart-inner'>
                    <img src={EmptyCartImage} alt="product_image" />
                </div>
                <h6>You have no items in your shopping cart.</h6>
            </div >
        );
    }
}

