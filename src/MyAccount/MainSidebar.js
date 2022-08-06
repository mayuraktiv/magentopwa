import React, { Component } from 'react';


export default class MainSidebar extends Component {
    render() {
        return (
            <div className='sidebar sidebar-main'>
               <div className='account-nav'>
                   <div className='account-nav-title'>Account Navigation</div>
                   <div className='account-nav-content'>
                       <ul>
                           <li><a href="/myaccount" className='current'>My Account</a></li>
                           <li><a href="/myorders">My Orders</a></li>
                           <li><a href="/mydownloadableproducts">My Downloadable Products</a></li>
                           <li><a href="/mywishlist">My WishList</a></li>
                           <li><a href="/myaddressbook">Address Book</a></li>
                           <li><a href="/myaccountinfo">Account Information</a></li>
                           <li><a href="/myproductreview">My Product Reviews</a></li>
                       </ul>
                   </div>
               </div>
            </div>
        );
    }
}
