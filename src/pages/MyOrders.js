import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Account from '../MyAccount/Orders';
import '../style/base.scss';
import '../style/partials/_account.scss';
import Orders from '../MyAccount/Orders';

export default class MyOrders extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="myaccount myorder">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <Orders></Orders>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

