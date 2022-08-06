import React, { Component } from 'react';
import classnames from 'classnames';
import Logo from '../common/Logo';

export default class FirstFooter extends Component {
    render() {
        return (
            <div className={classnames('first-footersection', this.props.className)}>
                <div className="footer-logo mb-4">
                <Logo></Logo>
                </div>
                <ul className="list-icon pl-0">
                    <li><span className="material-icons">location_on</span>184 Main Rd E, St Albans<br></br>VIC 3021, Australia</li>
                    <li><span className="material-icons">mail</span><a href="#">contact@company.com</a></li>
                    <li><span className="material-icons">call</span><a href="#">+001 2233 456</a></li>
                </ul>
                <ul className="social-link">
                    <li><a><span className=""></span></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                </ul>
            </div>
        );
    }
}