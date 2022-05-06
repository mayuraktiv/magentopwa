import React, { Fragment, useContext, useState } from 'react';
import classnames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CartWrapper from '../cart/CartWrapperPopup';
import CartPriceBox from '../cart/CartPriceBox';
import CartPromoBox from '../cart/CartPromoBox';
import CartFooter from '../cart/CartFooterPopup';
import CartEmpty from '../cart/CartEmpty';
import CartContext from '../controllers/contexts/cart/cartContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const CartIcon = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { cart_details } = useContext(CartContext);
    return (
        <div className={classnames('minicart', props.className)}>
            <div className='cart_bubble_box'>
                <span className="material-icons" onClick={() => setDialogOpen(true)}>local_mall</span>
                {cart_details?.total_quantity > 0 &&
                    <span className='cart_bubble'>{cart_details.total_quantity}</span>
                }
            </div>
            <Dialog
                fullScreen open={dialogOpen}
                className='minicart-popup'
                onClose={() => setDialogOpen(false)}
                TransitionComponent={Transition}
                transitionDuration={600}
            >
                <div className='cart-header card'>
                    <div className='cart-header-content'>
                        <h5>My Cart</h5>
                    </div>
                    <button className="cart-close" onClick={() => setDialogOpen(false)}>
                        <i className="material-icons">close</i>
                    </button>
                </div>
                {cart_details?.total_quantity > 0
                    ?
                    <Fragment>
                        <div className='cart-body card'>
                            <CartWrapper />
                        </div>
                        <CartPriceBox></CartPriceBox>
                        <CartPromoBox></CartPromoBox>
                        <CartFooter></CartFooter>
                    </Fragment>
                    :
                    <CartEmpty />
                }
            </Dialog>
        </div>
    );
}

export default CartIcon;