import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firstimage from '../images/digital_laptop.jpg';
import secondimage from '../images/digital_accessories.jpg';
import thirdimage from '../images/digital_watch.jpg';
import fourthimage from '../images/digital_camera.jpg';

export default function Fourcontainer() {
    return (
        <div className="four-containersection">
            <div className="frame section-wrapper">
                <div className="left-section position-relative">
                    <div className="image">
                        <Link to="/" className="left-section-link">
                            <img src={firstimage} className="image_block" alt="slideImage" />
                        </Link>
                    </div>
                    <div className="button">
                        <button className="btn">Laptop</button>
                    </div>
                </div>
                <div className="right-section">
                    <div className="right-top-section">
                        <div className="firstright-top-section position-relative">
                            <div className="image">
                                <Link to="/" className="firstright-top-link">
                                    <img src={secondimage} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="button">
                                <button className="btn">Acessories</button>
                            </div>
                        </div>
                        <div className="secondright-top-section position-relative">
                            <div className="image">
                                <Link to="/category" className="secondright-top-link">
                                    <img src={thirdimage} className="image_block" alt="slideImage" />
                                </Link>
                            </div>
                            <div className="button">
                                <button className="btn">iWatch</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-bottom-section position-relative">
                        <div className="image">
                            <Link to="/" className="right-bottom-link">
                            <img src={fourthimage} className="image_block" alt="slideImage" />
                            </Link>
                        </div>
                        <div className="button">
                            <button className="btn">Camera</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}