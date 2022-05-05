import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import '../style/base.scss';

export default class AddToCart extends React.Component {
    render() {
        return (
            <div className={classnames('add_to_cart_btn', this.props.className)}>
                {this.props.params.type === "ac_icon" &&
                    <Link className="addcart_icon" to="#">
                        <i className="material-icons">add_shopping_cart</i>
                    </Link>
                }
                {this.props.params.type === "ac_btn" &&
                    <Link className="addcart_btn" to="#">
                        <span>Add To Cart</span>
                    </Link>
                }
                {this.props.params.type === "buynow" &&
                    <Link className="addcart_btn" to="/cart" >
                        <i className="material-icons">shopping_cart</i>
                        <span>Buy Now</span>
                    </Link>
                }
            </div>
        );
    }
}