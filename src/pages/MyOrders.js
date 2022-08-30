import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Orders from '../MyAccount/Orders';
import '../style/partials/_account.scss';

const MyOrders = () => {
    return (
        <div id="page_wrapper">
            <div className="myaccount myorder">
                <Header />
                <div id="maincontent" className="page-main">
                    <Orders />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MyOrders;