import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainSidebar extends Component {
    render() {
        return (
            <div className='sidebar sidebar-main'>
               <div className='account-nav'>
                   <div className='account-nav-title'>Account Navigation</div>
                   <div className='account-nav-content'>
                       <ul>
                           <li><NavLink to="/customer/account/" activeClassName='current'>My Account</NavLink></li>
                           <li><NavLink to="/sales/order/history/" activeClassName='current'>My Orders</NavLink></li>
                           <li><NavLink to="/wishlist/" activeClassName='current'>My Wishlist</NavLink></li>
                           <li><NavLink to="/customer/address/" activeClassName='current'>My Addresses</NavLink></li>
                       </ul>
                   </div>
               </div>
            </div>
        );
    }
}
