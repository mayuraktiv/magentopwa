import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import CartLeft from '../cart/CartLeft';
import CartRight from '../cart/CartRight';
import '../style/base.scss';
import '../style/partials/_editcart.scss';

export default class EditCart extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="editcart-page">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <div className='frame'>
                            <div className='row justify-content-center page-title'>
                                <h4>Shopping Cart</h4>
                            </div>
                            <div className='row'>
                                <div className='col-des-8 col-tb-12 col-mb-12 cart-left-section'>
                                   <CartLeft></CartLeft> 
                                   <div className='cart action'>
                                       <button className='continue btn btn-default'><span>Continue Shopping</span></button>
                                       <button className='update-cart btn btn-default'><span>Update Shopping Cart</span></button>
                                    </div> 
                                </div>
                                <div className='col-des-4 col-tb-12 col-mb-12 cart-right-section'>
                                    <CartRight></CartRight>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

