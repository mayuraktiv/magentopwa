import React, { Component } from 'react';
import MainSidebar from '../MyAccount/MainSidebar';


export default class AddessBook extends Component {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                    <div className='column main'>
                        <div className='block-addresses'>
                            <div className='block-addresses-default'>
                                <div className='box-address-billing'>
                                    <div className='block-title-account'><h5>Default Billing Address</h5></div>
                                    <div className='block-content'>
                                        <div className='box-billing-address'>
                                            <address>test test<br></br>test<br></br>28 S High St<br></br>West Chester,  Pennsylvania, 19382<br></br>United States<br></br>T: 1234567891</address>
                                            <div className='box-action'>
                                                <a href="#" className='edit-address btn btn-bg btn-xs'>Edit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='box-address-shipping'>
                                    <div className='block-title-account'><h5>Default shipping Address</h5></div>
                                        <div className='block-content'>
                                            <div className='box-billing-address'>
                                                <address>test test<br></br>test<br></br>28 S High St<br></br>West Chester,  Pennsylvania, 19382<br></br>United States<br></br>T: 1234567891</address>
                                                <div className='box-action'>
                                                    <a href="#" className='edit-address btn btn-bg btn-xs'>Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className='block-addresses-list'>
                                <div className='block-title-account'><h5>Additional Address Entries</h5></div>
                                    <div className='block-content'>
                                        <div className='box-billing-address'>
                                            <span>You have no default billing address in your address book.</span>   
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className='block-addresses-list'>
                            <div className='block-title-account'><h5>Additional Address Entries</h5></div>
                            <div className='block-content'>
                                    <div className='box-billing-address'>
                                        <span>You have no default billing address in your address book.</span>   
                                    </div>
                            </div>
                            <div className='actions-toolbar-form'>
                                <a href='#' className='btn btn-secondary btn-bg'>Back</a>
                                <a href='#' className='btn add-address-btn'>Add New Address</a>
                             </div>
                        </div>
                    </div>
            </div>
        );
    }
}
