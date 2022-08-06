import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import UserRegister from '../User/User-register';
import '../style/base.scss';
import '../style/partials/_form.scss';

export default class Register extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="register">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <div className='columns frame'>
                            <div className='column main'>
                                <div className='block-title'>
                                    <h5>Sign Up</h5>
                                </div>
                                <UserRegister></UserRegister> 
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

