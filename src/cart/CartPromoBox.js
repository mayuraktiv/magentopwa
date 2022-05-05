import React, { Component } from 'react';
import classnames from 'classnames';

import '../style/base.scss';

export default class CartPromoBox extends Component {
    render() {
        return (
            <div className={classnames('cart_promo_box sidebar_box', this.props.className)}>
                <div className="card">
                    <div className="card-header">
                        <h6>Have a Coupon Code?</h6>
                    </div>
                    <div className="card-body">
                        <form className="promobox_form">
                            <input className="form-control" type="search" aria-label="Search" />
                            <button className="btn btn-default" type="submit">Apply</button>
                            <button className="btn btn-default" type="submit">Remove</button>
                        </form>
                    </div>

                </div>
            </div >
        );
    }
}