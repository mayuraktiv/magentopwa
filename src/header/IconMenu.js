import React, { Component } from 'react';
import classnames from 'classnames';
import CartIcon from './CartIcon';
import AccountIcon from './AccountIcon';

export default class IconMenu extends Component {
    render() {
        return (
            <div className={classnames('icon-menu', this.props.className)}>
                <AccountIcon></AccountIcon>
                <div className="whishlist">
                    <span className="material-icons">favorite_border</span>
                </div>
                <CartIcon></CartIcon>
            </div>
        )
    }
}