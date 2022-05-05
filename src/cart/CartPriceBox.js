import React, { Component } from 'react';
import classnames from 'classnames';
import PriceSummary from './PriceSummary';

export default class CartPriceBox extends Component {
    render() {
        return (
            <div className={classnames('cart_price_box', this.props.className)}>
                <div className="card">
                    <div className="card-header">
                        <h6>Price Details</h6>
                    </div>
                    <div className="card-body">
                        <PriceSummary />
                    </div>
                    <div className="card-footer">
                    <div id="accordion" className="accordion_row">
                        <button className="price_discount" data-toggle="collapse" data-target="#co_step" aria-expanded="true">
                        Your Total Savings on this order <strong>$300.00</strong> <i className="material-icons">keyboard_arrow_down</i>
                        </button>
                    </div>
                    <div id="co_step" className="collapse" data-parent="#accordion">
                        <div className="accordion_content_box">
                            <ul>
                                <li>+ 200 points (50 points on each 10 usd)</li>
                                <li>+ 10 points for product</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div >
        );
    }
}