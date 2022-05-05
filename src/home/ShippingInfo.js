import React, { Component } from 'react';

export default function ShippingInfo() {
    return (
        <div className="shipping-info">
            <div className="frame">
                <div className="row">
                    <div className="col-des-3 col-tb-6 col-mb-12 ">
                        <div className="shipping-info-content">
                            <div className="shipping-info-icon">
                                <span className="material-icons">
                                    drive_eta
                                </span>
                            </div>
                            <div className="shipping-info-text">
                                <h6>FREE SHIPPING</h6>
                                <p>Free shipping on all US order or order above $200</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-des-3 col-tb-6 col-mb-12 ">
                        <div className="shipping-info-content">
                            <div className="shipping-info-icon">
                                <span className="material-icons">
                                    support
                                </span>
                            </div>
                            <div className="shipping-info-text">
                                <h6>SUPPORT 24/7</h6>
                                <p>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-des-3 col-tb-6 col-mb-12 ">
                        <div className="shipping-info-content">
                            <div className="shipping-info-icon">
                                <span className="material-icons">
                                    replay_circle_filled
                                </span>
                            </div>
                            <div className="shipping-info-text">
                                <h6>30 DAYS RETURN</h6>
                                <p>Simply return it within 30 days for an exchange.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-des-3 col-tb-6 col-mb-12 ">
                        <div className="shipping-info-content">
                            <div className="shipping-info-icon">
                                <span className="material-icons">
                                    lock
                                </span>
                            </div>
                            <div className="shipping-info-text">
                                <h6>100% PAYMENT SECURE</h6>
                                <p>We ensure secure payment with PEV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}