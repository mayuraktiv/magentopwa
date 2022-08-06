import React, { Component } from 'react';
import '../style/partials/_form.scss';

export default class Userguestlogin extends Component {
    render() {
        return (
            <div className='block-content'>
                <form className='guest-login-form'>
                    <fieldset className='fieldset'>
                        <div className='field email required'>
                            <label className='label' for='emial'>
                                <span>Email Address</span>
                            </label>
                            <div className='control'>
                                <input type='email' id='email' className='input-text'></input>
                            </div>
                        </div>
                        <div className='actions-toolbar'>
                            <div className='primary'>
                                <button type="submit" class="btn btn-default"><span>Checkout as Guest</span></button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
