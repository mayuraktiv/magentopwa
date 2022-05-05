import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import '../style/base.scss';

export default class WishList extends React.Component {
    render() {
        return (
            <div className={classnames('wishlist_block', this.props.className)}>
                <Link className="wish_link d-flex align-items-center justify-content-center" to="/">
                    <i className="material-icons">favorite</i>
                </Link>
            </div>
        );
    }
}