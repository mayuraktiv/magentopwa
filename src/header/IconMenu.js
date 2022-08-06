import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
// import AccountIcon from './AccountIcon';

export default class IconMenu extends Component {
    render() {
        return (
            <div className={classnames('icon-menu', this.props.className)}>
                {/* <AccountIcon></AccountIcon> */}
                <div className='my-account'>
                    <span className="material-icons">account_circle</span>
                    <div className='header-acccount'>
                        <ul className='header-links box'>
                            <li><Link to="/myaccount">My Account</Link></li>
                            <li><Link to="/mywishlist">My Wish List</Link></li>
                            <li><Link to="/login">Sign In</Link></li>
                            <li><Link to="/register">Create an Account</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="whishlist">
                    <span className="material-icons">favorite_border</span>
                </div>
                <CartIcon></CartIcon>
            </div>
        )
    }
}