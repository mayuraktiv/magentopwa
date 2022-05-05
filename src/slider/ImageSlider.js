import React, { Component } from 'react';
import classnames from 'classnames';

import Swiper from 'react-id-swiper';

import { Link } from 'react-router-dom';
import ImagePath1 from '../images/slideImage1.jpg';
import ImagePath2 from '../images/slideImage2.jpg';

import '../style/base.scss';

export default class ImageSlider extends Component {
    render() {
        return (
            <div className={classnames('site_banner site_slider', this.props.className)}>
                <div className="frame">
                    <Swiper>
                        <div className="slide_row">
                            <div className="image_banner_cover">
                                <Link to="/" className="image_banner_link">
                                    <img src={ImagePath1} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="slider-text">
                                <div className="inner-text">
                                    <div className="inner-text-wrapper">
                                        <h2>FLASH SALE OF 70%</h2>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
                                        <a href="#" className="btn btn-default">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide_row">
                            <div className="image_banner_cover">
                                <Link to="/" className="image_banner_link">
                                    <img src={ImagePath2} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="slider-text">
                                <div className="inner-text">
                                    <div className="inner-text-wrapper">
                                        <h2>FLASH SALE OF 50%</h2>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
                                        <a href="#" className="btn btn-default">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide_row">
                            <div className="image_banner_cover">
                                <Link to="/" className="image_banner_link">
                                    <img src={ImagePath1} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="slider-text">
                                <div className="inner-text">
                                    <div className="inner-text-wrapper">
                                        <h2>FLASH SALE OF 60%</h2>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
                                        <a href="#" className="btn btn-default">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide_row">
                            <div className="image_banner_cover">
                                <Link to="/" className="image_banner_link">
                                    <img src={ImagePath2} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="slider-text">
                                <div className="inner-text">
                                    <div className="inner-text-wrapper">
                                        <h2>FLASH SALE OF 50%</h2>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
                                        <a href="#" className="btn btn-default">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Swiper >
                </div>
            </div>
        )
    }
}
