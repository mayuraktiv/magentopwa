import React, { Fragment } from 'react';
import classnames from 'classnames';
import FieldQty from './FieldQty';
import addToCartApp from '../controllers/apps/addToCartApp';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

class AddToCart extends addToCartApp {
    render() {
        return (
            <Fragment>
                {this.props.pageType === "product_detail" &&
                    <FieldQty
                        qty={this.state.qty}
                        qtyMinus={this.qtyMinus}
                        qtyPlus={this.qtyPlus}
                    />
                }
                <div className={classnames('add_to_cart_btn', this.props.className)}>
                    {!this.state.loading
                        ?
                        <button className="addcart_btn" type='button' onClick={this.addProductToCart}>
                            <span>Add To Cart</span>
                        </button>
                        :
                        <button className="addcart_btn" type='button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '3px', paddingBottom: '3px' }}>
                            <CircularProgress color="#fff" size={25} />
                        </button>
                    }
                </div>
            </Fragment>
        );
    }
}

export default connect(addToCartApp.mapStateToProps, addToCartApp.mapDispatchToProps)(AddToCart);