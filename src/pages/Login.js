import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Userlogin from '../User/User-login';
import '../style/partials/_form.scss';

export default class Login extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className='block-content'>
                    <div className="login">
                        <Header></Header>
                        <div id="maincontent" className="page-main">
                            <div className='columns frame'>
                                <div className='column main'>
                                    <div className='block-title'>
                                        <h5>Sign In</h5>
                                    </div>
                                    <Userlogin></Userlogin> 
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        );
    }
}

