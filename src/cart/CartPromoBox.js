import React from 'react';
import promoBoxApp from '../controllers/apps/promoBoxApp';
import classnames from 'classnames';
import { connect } from 'react-redux';

class CartPromoBox extends promoBoxApp {
    render() {
        return (
            <div className={classnames('cart_promo_box sidebar_box', this.props.className)}>
                <div className="card">
                    <div className="card-header">
                        <h6>Have a Coupon Code?</h6>
                    </div>
                    <div className="card-body">
                        <form className="promobox_form" onSubmit={this.onFormSubmit}>
                            <input
                                className="form-control"
                                name='coupon_code'
                                type="search"
                                aria-label="Search"
                                value={this.state.coupon_code}
                                onChange={this.valueChangeHandler}
                            />
                            <button className="btn btn-default" type="submit">Apply</button>
                            {/* <button className="btn btn-default" type="submit">Remove</button> */}
                        </form>
                    </div>

                </div>
            </div >
        );
    }
}

export default connect(promoBoxApp.mapStateToProps, promoBoxApp.mapDispatchToProps)(CartPromoBox);