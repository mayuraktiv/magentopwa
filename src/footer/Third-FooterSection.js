import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class ThirdFooter extends Component {
    render() {
        return (
            <div className={classnames('third-footersection', this.props.className)}>
                 <h6 className="mb-2">Infomation</h6>
                <div className="footer-information">
                    <ul className="menu pl-0">
                        <li><Link to="/about-us/">About Us</Link></li>
                        <li><Link to="/contact/">Contact Us</Link></li>
                        <li><Link to="/customer-service">Customer Service</Link></li>
                        <li><Link to="/privacy-policy-cookie-restriction-mode">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}