import React, { Fragment } from 'react';
import classnames from 'classnames';
import FieldQty from './FieldQty';
import addToCartApp from '../controllers/apps/addToCartApp';
import { connect } from 'react-redux';

class AddToCart extends addToCartApp {
    render() {
        console.log("AddToCart---->", this.props, this.state);
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
                        <button className="addcart_btn" type='button'>
                            <span>Please wait...</span>
                        </button>
                    }
                    {/* {this.props.params.type === "ac_icon" &&
                        <button className="addcart_icon" to="#">
                            <i className="material-icons">add_shopping_cart</i>
                        </button>
                    }
                    {this.props.params.type === "ac_btn" &&
                        <button className="addcart_btn" to="#">
                            <span>Add To Cart</span>
                        </button>
                    }
                    {this.props.params.type === "buynow" &&
                        <button className="addcart_btn" to="/cart" >
                            <i className="material-icons">shopping_cart</i>
                            <span>Buy Now</span>
                        </button>
                    } */}
                </div>
            </Fragment>
        );
    }
}

export default connect(addToCartApp.mapStateToProps, addToCartApp.mapDispatchToProps)(AddToCart);