import React, { Component } from 'react';

export default class UserRegister extends Component {
    render() {
        return (
            <div className='block-content'>
                <form className='register-form'>
                    <fieldset className='fieldset register'>
                        <div className='row customer-name-fields'>
                            <div className='col-des-6 col-tb-6 col-mb-12 field-name-firstname'>
                                <label className='label'><span>First Name</span></label>
                                <div className='control'>
                                    <input type='text' id='firstname' className='input-text'></input>
                                </div>
                            </div>
                            <div className='col-des-6 col-tb-6 col-mb-12 field-name-lastname'>
                                <label className='label'><span>Last Name</span></label>
                                <div className='control'>
                                    <input type='text' id='lasttname' className='input-text'></input>
                                </div>
                            </div>
                        </div>
                        <div className='field email required'>
                            <label className='label' for='email'><span>Email</span></label>
                            <div className='control'>
                                <input type='email' name='email' id='email' className='input-text'></input>
                            </div>
                        </div>
                        <div className='field password required'>
                            <label className='label' for='password'><span>Password</span></label>
                            <div className='control'>
                                <input type='password' name='password' id='password' className='input-text'></input>
                            </div>  
                        </div>
                        <div className='field confirmation password required'>
                            <label className='label' for='password_confirmation'><span>Current Password</span></label>
                            <div className='control'>
                                <input type='password' name='password_confirmation' id='password-confirmation' className='input-text'></input>
                            </div>  
                        </div>
                    </fieldset>
                    <div className='actions-toolbar'>
                        <div className='primary'>
                            <button type="submit" class="btn btn-default"><span>Sign Up</span></button>
                        </div>
                        <div className='secondary'>
                            <span>Alreay have an account?</span>
                            <span><a href='/login' className='custom_link'>Sign In</a></span>
                            <span><a href='/forgotpassword' className='custom_link'>Forgot Password</a></span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
