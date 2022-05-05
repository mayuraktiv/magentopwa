import React, { Component } from 'react';
import classnames from 'classnames';

import CartBodyPopup from './CartBodyPopup';

export default class CartWrapper extends Component {
    render() {
        return (
            <div className={classnames('cart_wrapper', this.props.className)}>
                <div className="card">
                    <CartBodyPopup />
                </div>
            </div >
        );
    }
}

