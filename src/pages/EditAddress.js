import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AddressForm from '../MyAccount/AddressForm';
import MainSidebar from '../MyAccount/MainSidebar';
import '../style/partials/_account.scss';

const EditAddress = (props) => {
    let addressId = null;
    if (props.match.params?.id?.length > 0) {
        addressId = props.match.params.id;
    }
    return (
        <div id="page_wrapper">
            <div className="myaccount myaddressbook">
                <Header />
                <div id="maincontent" className="page-main">
                    <div className='columns frame'>
                        <MainSidebar />
                        {addressId
                            ?
                            <AddressForm {...props} type="edit" addressId={addressId} />
                            :
                            <div className='no-address-available'>
                                <p>Request address is not available!</p>
                            </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default EditAddress;