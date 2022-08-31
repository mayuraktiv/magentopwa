import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AddressForm from '../MyAccount/AddressForm';
import MainSidebar from '../MyAccount/MainSidebar';
import '../style/partials/_account.scss';

const AddAddress = (props) => {
    return (
        <div id="page_wrapper">
            <div className="myaccount myaddressbook">
                <Header />
                <div id="maincontent" className="page-main">
                    <div className='columns frame'>
                        <MainSidebar />
                        <AddressForm {...props} type="add"/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default AddAddress;