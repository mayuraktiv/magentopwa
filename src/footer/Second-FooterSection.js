import React, { Component } from 'react';
import classnames from 'classnames';

export default class SecondFooter extends Component {
    render() {
        return (
            <div className={classnames('second-footersection', this.props.className)}>
                <h6 className="mb-2">Categories</h6>
                <div className="footer-category">
                    <ul className="menu pl-0">
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Skirts</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}