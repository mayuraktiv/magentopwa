import React, { Component } from 'react';
import MainSidebar from '../MyAccount/MainSidebar';


export default class AccountInformation extends Component {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                <div className='column main'>
                    <form className='form-edit-account'>
                        <fieldset className='fieldset info'>
                            <div className='block-title-account'><h5>Account Information</h5></div>
                            <div className='row customer-name-fields'>
                                <div className='col-des-6 col-tb-6 col-mb-12 field-name-firstname'>
                                    <div className='control'>
                                        <input type='text' id='firstname' placeholder='First Name' value='test' className='input-text'></input>
                                    </div>
                                </div>
                                <div className='col-des-6 col-tb-6 col-mb-12 field-name-lastname'>
                                    <div className='control'>
                                        <input type='text' id='lasttname' placeholder='Last Name' value='test' className='input-text'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='field choice'>
                                <input type='checkbox' name='change_email' id='change-email' className='checkbox'></input>
                                <label className='label' for='change-email'><span>Change Email</span></label>
                            </div>
                            <div className='field choice'>
                                <input type='checkbox' name='change_password' id='change-password' className='checkbox'></input>
                                <label className='label' for='change-password'><span>Change Password</span></label>
                            </div>
                            <div className='field choice'>
                                <input type='checkbox' name='assistance_allowed_checkbox' id='assistance_allowed_checkbox' className='checkbox'></input>
                                <label className='label' for='assistance_allowed_checkbox'><span>Allow remote shopping assistance</span></label>
                            </div>
                        </fieldset>
                        <fieldset className='fieldset password'>
                            <div className='block-title-account'><h5>Change Email and Password</h5></div>
                            <div className='field email required'>
                                <label className='label' for='email'><span>Email</span></label>
                                <div className='control'>
                                    <input type='email' name='email' id='email' className='input-text'></input>
                                </div>
                            </div>
                            <div className='field current password required'>
                                <label className='label' for='current-password'><span>Current Password</span></label>
                                <div className='control'>
                                    <input type='password' name='current_password' id='current-password' className='input-text'></input>
                                </div>  
                            </div>
                            <div className='field new password required'>
                                <label className='label' for='password'><span>New Password</span></label>
                                <div className='control'>
                                    <input type='password' name='password' id='password' className='input-text'></input>
                                </div>  
                            </div>
                            <div className='field confirmation password required'>
                                <label className='label' for='current-password'><span>Confirm New Password</span></label>
                                <div className='control'>
                                    <input type='password' name='password_confirmation' id='password-confirmation' className='input-text'></input>
                                </div>  
                            </div>
                        </fieldset>
                        <div className='actions-toolbar-form'>
                            <div className='primary'>
                                <button type='submit' className='btn btn-default save'><span>Save</span></button>
                            </div>
                            <div className='secondary'>
                                <button type='submit' className='btn btn-default btn-bg'><span>Go Back</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
