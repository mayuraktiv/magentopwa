import React  from 'react';
import { Link } from 'react-router-dom';
import firstimage from '../images/macbook.jpg';
import secondimage from '../images/deals_digital.jpg';
import thirdimage from '../images/smart_phont.jpg';

export default function Threecontainer() {
    return (
        <div className="three-containersection">
            <div className="frame">
                <div className="row">
                    <div className="col-des-4 col-tb-6 col-mb-12 first-sec">
                        <div className="first-sec-wrap">
                            <div className="image">
                                <Link to="/" className="left-section-link">
                                    <img src={firstimage} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="content">
                                <h6>GET UP TO 50% OFF</h6>
                                <h4>MACBOOK AIR</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-des-4 col-tb-12 col-mb-12 second-sec">
                        <div className="image">
                            <Link to="/" className="left-section-link">
                                <img src={secondimage} className="image_block" alt="slideImage" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-des-4 col-tb-6 col-mb-12 third-sec">
                        <div className="third-sec-wrap">
                            <div className="image">
                                <Link to="/" className="left-section-link">
                                    <img src={thirdimage} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="content">
                                <h6>SMART PHONE</h6>
                                <h2>UP TO 50%</h2>
                                <button className="btn transparent_btn btn-default">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}