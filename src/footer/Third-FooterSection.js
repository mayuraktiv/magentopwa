import React, { Component } from 'react';
import classnames from 'classnames';

export default class ThirdFooter extends Component {
    render() {
        return (
            <div className={classnames('third-footersection', this.props.className)}>
                 <h6 className="mb-2">Infomation</h6>
                <div className="footer-information">
                    <ul className="menu pl-0">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}