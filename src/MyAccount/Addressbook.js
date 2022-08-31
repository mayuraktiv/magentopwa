import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../controllers/contexts/auth/AuthContext';
import MainSidebar from '../MyAccount/MainSidebar';
import { useHistory } from 'react-router-dom';

const AddessBook = () => {
    const { userdata } = useContext(AuthContext);
    const history = useHistory();
    let addresses = [];
    if (userdata?.addresses?.length > 0) {
        addresses = userdata.addresses;
    }
    return (
        <div className='columns frame'>
            <MainSidebar />
            <div className='column main'>
                <div className='block-addresses d_flex'>
                    <div className='block-addresses-default'>
                        <div className='box-address-billing'>
                            <div className='block-title-account'><h5>Default Billing Address</h5></div>
                            <div className='block-content'>
                                <div className='box-billing-address'>
                                    {addresses.map(address => (
                                        <Fragment>
                                            {address.default_billing &&
                                                <Fragment>
                                                    <address>
                                                        {address.firstname} {address.lastname}
                                                        <br />
                                                        {address.street.join(', ')}
                                                        <br />
                                                        {address.city}, {address.region.region}, {address.postcode}
                                                        <br />
                                                        {address.country_code}
                                                        <br />
                                                        T: {address.telephone}
                                                    </address>
                                                    <div className="box-action d_flex">
                                                        <Link to={`/customer/address/edit/id/${address.id}`} className='edit-address btn btn-bg btn-xs'>
                                                            Edit Billing Address
                                                        </Link>
                                                    </div>
                                                </Fragment>
                                            }
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='box-address-shipping'>
                            <div className='block-title-account'><h5>Default shipping Address</h5></div>
                            <div className='block-content'>
                                <div className='box-billing-address'>
                                    {addresses.map(address => (
                                        <Fragment>
                                            {address.default_shipping &&
                                                <Fragment>
                                                    <address>
                                                        {address.firstname} {address.lastname}
                                                        <br />
                                                        {address.street.join(', ')}
                                                        <br />
                                                        {address.city}, {address.region.region}, {address.postcode}
                                                        <br />
                                                        {address.country_code}
                                                        <br />
                                                        T: {address.telephone}
                                                    </address>
                                                    <div className="box-action d_flex">
                                                        <Link to={`/customer/address/edit/id/${address.id}`} className='edit-address btn btn-bg btn-xs'>
                                                            Edit Shipping Address
                                                        </Link>
                                                    </div>
                                                </Fragment>
                                            }
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='block-addresses-list'>
                    <div className='block-title-account'><h5>Additional Address Entries</h5></div>
                    <div className='block-content'>
                        <div className='box-billing-address'>
                            {addresses.map(address => (
                                <Fragment>
                                    {(!address.default_shipping && !address.default_billing) &&
                                        <Fragment>
                                            <address>
                                                {address.firstname} {address.lastname}
                                                <br />
                                                {address.street.join(', ')}
                                                <br />
                                                {address.city}, {address.region.region}, {address.postcode}
                                                <br />
                                                {address.country_code}
                                                <br />
                                                T: {address.telephone}
                                            </address>
                                            <div className="box-action d_flex">
                                                <Link to={`/customer/address/edit/id/${address.id}`} className='edit-address btn btn-bg btn-xs'>
                                                    Edit
                                                </Link>
                                            </div>
                                        </Fragment>
                                    }
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <div className='actions-toolbar-form d_flex'>
                        <button type='button' onClick={history.goBack} className='btn btn-secondary btn-bg'>Back</button>
                        <Link to='/customer/address/new/' className='btn add-address-btn'>Add New Address</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddessBook