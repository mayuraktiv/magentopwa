import React from 'react';
import Header from '../header/Header';
import ProductDetailMain from '../product-detail/ProductDetailMain';
import Footer from '../footer/Footer';
import productDetailApp from '../controllers/apps/productDetailApp';
import { connect } from 'react-redux';
import '../style/partials/_productdetail.scss'

class ProductDetail extends productDetailApp {
    render() {
        return (
            <div id="page_wrapper">
                <div className="productdetail-page">
                    <Header/>
                    <div id="maincontent" className="page-main">
                        <div className="columns">
                            {this.props.productDetail &&
                                <ProductDetailMain productDetail={this.props.productDetail}/>
                            }
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default connect(productDetailApp.mapStateToProps)(ProductDetail);