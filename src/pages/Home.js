import React, { Component } from 'react';
import classnames from 'classnames';

import Header from '../header/Header';
import ImageSlider from '../slider/ImageSlider';
import ShippingInfo from '../home/ShippingInfo';
import Fourcontainer from '../home/Four-containersection';
import ProductWidget from '../product/ProductWidget';
import Tabsection from '../home/Tabsection';
import Footer from '../footer/Footer';
import '../style/base.scss';
import Threecontainer from '../home/Three-containersection';

export default class Home extends Component {
    render() {
        return (
            <div id="page_wrapper">
                <div className="home-page">
                    <Header></Header>
                    <div id="maincontent" className="page-main">
                        <div className={classnames('home-slider', this.props.className)}>
                            <ImageSlider />
                        </div>
                        <ShippingInfo/>
                        <Fourcontainer/>
                        <Tabsection/>
                        <Threecontainer/>
                        <ProductWidget/>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

