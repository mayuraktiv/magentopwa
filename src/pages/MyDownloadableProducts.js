import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import DownloadableProduts from '../MyAccount/DownloadableProducts';
import '../style/base.scss';
import '../style/partials/_account.scss';

export default class MyDownloadableProduts extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="myaccount downloadable-products">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <DownloadableProduts></DownloadableProduts>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

