import React, { Fragment, useContext } from 'react';
import classnames from 'classnames';
import CartItemPopup from './CartItemPopup';
import CartContext from '../controllers/contexts/cart/cartContext';

const CartBody = (props) => {
    const { cart_details } = useContext(CartContext);
    return (
        <div className={classnames('card-body', props.className)}>
            <ul className="cart_item_listing pl-0">
                {cart_details?.items?.map(item => (
                    <Fragment key={"cart-item-"+item.uid}>
                        <CartItemPopup cartItem={item}/>
                    </Fragment>
                ))}
            </ul>
        </div >
    );
}

export default CartBody;