import React, { Component } from 'react';

export default class Userlogin extends Component {
    render() {
        return (
            <div className='block-content'>
                <form className='login-form'>
                    <fieldset className='fieldset login'>
                        <div className='field email required'>
                            <label className='label' for='emial'>
                                <span>Email Address</span>
                            </label>
                            <div className='control'>
                                <input type='email' id='email' className='input-text'></input>
                            </div>
                        </div>
                        <div className='field password required'>
                            <label className='label' for='password'><span>Password</span></label>
                            <div className='control'>
                                <input type='password' name='password' id='password' className='input-text'></input>
                            </div>  
                        </div>
                        <div className='actions-toolbar'>
                            <div className='primary'>
                                <button type="submit" class="btn btn-default"><span>Sign In</span></button>
                            </div>
                            <div className='secondary'>
                                <span>New User?</span>
                                <span><a href='/register' className='custom_link'>Sign Up</a></span>
                                <span><a href='/forgotpassword' className='custom_link'>Forgot Password</a></span>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
