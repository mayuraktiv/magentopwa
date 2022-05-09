import React from 'react';
import classnames from 'classnames';
import CartBodyPopup from './CartBodyPopup';

const CartWrapper = (props) => {
    return (
        <div className={classnames('cart_wrapper', props.className)}>
            <div className="card">
                <CartBodyPopup />
            </div>
        </div >
    );
}

export default CartWrapper;