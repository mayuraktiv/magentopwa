import React, { Component } from 'react';
import Userforgotpassword from '../User/UserForgotpassword';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../style/base.scss';
import '../style/partials/_form.scss';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="forgot-password">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <div className='columns frame'>
                            <div className='column main'>
                                <div className='block-title'>
                                    <h5>Forgot Your Password?</h5>
                                </div>
                                <Userforgotpassword></Userforgotpassword> 
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

