import React, { Component, } from 'react';
import classnames from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CartWrapper from '../cart/CartWrapperPopup';
import CartPriceBox from '../cart/CartPriceBox';
import CartPromoBox from '../cart/CartPromoBox';
import CartFooter from '../cart/CartFooterPopup';
import CartEmpty from '../cart/CartEmpty';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
}); 

export default class CartIcon extends Component {
    state = {
        dialogOpen: false
    }
    handleClickOpen = () => {
        this.setState({dialogOpen: true});
    }
    
    handleClose = () => {
        this.setState({dialogOpen: false});
    }

    render() {
        return (
            <div className={classnames('minicart', this.props.className)}>
                <span className="material-icons" onClick={this.handleClickOpen}>local_mall</span>
                <Dialog fullScreen open={this.state.dialogOpen} className='minicart-popup' onClose={this.handleClose} TransitionComponent={Transition} transitionDuration={600}>
                <div className='cart-header card'>
                    <div className='cart-header-content'>
                        <h5>My Cart</h5>
                    </div>
                    <button className="cart-close" onClick={this.handleClose}><i className="material-icons">close</i></button>
                </div>
                {/* <CartEmpty /> */}
                <div className='cart-body card'>
                    <CartWrapper />
                   
                </div>
                <CartPriceBox></CartPriceBox>
                <CartPromoBox></CartPromoBox>
                <CartFooter></CartFooter>
                </Dialog>
            </div>
        );
    }
}