import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../controllers/contexts/auth/AuthContext";
import ProfileOrders from "./ProfileOrders";
import MainSidebar from "./MainSidebar";

const Account = () => {
    const { userdata } = useContext(AuthContext);
    return (
        <div className="columns frame">
            <MainSidebar />
            {userdata?.firstname &&
                <div className="column main">
                    <div className="block-dashboard-info">
                        <div className="box-information">
                            <div className="block-title-Account">
                                <h5>Contact Information</h5>
                            </div>
                            <div className="box-content">
                                <p>
                                    {userdata.firstname} {userdata.lastname}
                                    <br />
                                    {userdata.email}
                                </p>
                            </div>
                            <div className="box-action d_flex">
                                <Link className="change-password btn btn-secondary btn-xs">Change Password</Link>
                                <Link className="edit btn btn-default btn-bg btn-xs">Edit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="block-dashboard-addresses">
                        <div className="block-title-Account d_flex">
                            <h5>Address Book</h5>
                            {userdata?.addresses?.length > 0 &&
                                <Link to='/customer/address/' className="btn btn-default btn-bg">
                                    Manage Addresses
                                </Link>
                            }
                        </div>
                        {userdata?.addresses?.length > 0
                            ?
                            <div className="block-content">
                                <div className="box-billing-address">
                                    <h6>Default Billing Address</h6>
                                    {userdata.addresses.map(address => (
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
                                                    <div className="box-action">
                                                        <a href="#" className="edit-address btn btn-secondary btn-xs">
                                                            Edit Billing Address
                                                        </a>
                                                    </div>
                                                </Fragment>
                                            }
                                        </Fragment>
                                    ))}

                                </div>
                                <div className="box-shipping-address">
                                    <h6>Default Shipping Address</h6>
                                    {userdata.addresses.map(address => (
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
                                                        <Link href="#" className="edit-address btn btn-secondary btn-xs">
                                                            Edit Shipping Address
                                                        </Link>
                                                    </div>
                                                </Fragment>
                                            }
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                            :
                            <div className="block-content">
                                <p>No address available!</p>
                            </div>
                        }
                    </div>
                    <ProfileOrders />
                </div>
            }
        </div>
    );
}

export default Account;