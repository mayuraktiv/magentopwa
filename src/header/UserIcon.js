import React, { useContext } from 'react';
import AuthContext from '../controllers/contexts/auth/AuthContext';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const UserIcon = (props) => {
    const { user_status: authenticated } = useContext(AuthContext);
    return (
        <div className={classnames('icon-menu', props.className)}>
            <div className='my-account'>
                <Link className='icon' to='/customer/account/'>
                    <span className="material-icons">account_circle</span>
                    {authenticated &&
                        <div className='header-acccount'>
                            <ul className='header-links box'>
                                <li><Link to="/customer/account/">My Account</Link></li>
                                <li><Link to="/wishlist/">My Wishlist</Link></li>
                                <li><Link to="/sales/order/history/">My Ordersr</Link></li>
                                <li><Link to="/customer/address/">My Addresses</Link></li>
                            </ul>
                        </div>
                    }
                </Link>
            </div>
            <div className='whishlist'>
                <Link className='icon' to='/wishlist/'>
                    <span className="material-icons">favorite_border</span>
                </Link>
            </div>
            <CartIcon />
        </div>
    )
}

export default UserIcon