import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Wishlist from '../MyAccount/Wishlist';
import '../style/partials/_account.scss';

export default class MyWishlist extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="myaccount mywishlist">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <Wishlist></Wishlist>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

