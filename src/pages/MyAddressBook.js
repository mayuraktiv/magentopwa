import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AddessBook from '../MyAccount/Addressbook';
import '../style/partials/_account.scss';

export default class MyAddressBook extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="myaccount myaddressbook">
                    <Header />
                    <div id="maincontent" className="page-main">
                        <AddessBook />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}