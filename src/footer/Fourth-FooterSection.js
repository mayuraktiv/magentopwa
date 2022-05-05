import React, { Component } from 'react';
import classnames from 'classnames';

export default class FourthFooter extends Component {
    render() {
        return (
            <div className={classnames('fourth-footersection', this.props.className)}>
                 <h6 className="mb-2">Quick Links</h6>
                <div className="footer-quicklinks">
                    <ul className="menu pl-0">
                        <li><a href="#">Store Location</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Orders Tracking</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}