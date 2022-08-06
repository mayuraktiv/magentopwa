import React, { Component } from 'react';
import '../style/partials/_form.scss';

export default class Userforgotpassword extends Component {
    render() {
        return (
            <div className='block-content'>
                <form className='forgotpassword-form'>
                    <fieldset className='fieldset forgotpassword'>
                        <div className='field email required'>
                            <label className='label' for='emial'>
                                <span>Please enter your email address below to receive a password reset link.</span>
                            </label>
                            <div className='control'>
                                <input type='email' id='email' className='input-text'></input>
                            </div>
                        </div>
                        <div className='actions-toolbar'>
                            <div className='primary'>
                                <button type="submit" class="btn btn-default"><span>Reset My Password</span></button>
                            </div>
                            <div className='secondary'>
                                <button class="btn btn-default"><span>Back</span></button>                             
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
