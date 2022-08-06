import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../style/base.scss';
import '../style/partials/_account.scss';
import ProductReview from '../MyAccount/ProductReview';

export default class MyProductReview extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="myaccount myorder">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <ProductReview></ProductReview>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

