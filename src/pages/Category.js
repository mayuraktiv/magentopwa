import React from 'react';
import Header from '../header/Header';
import CatContainer from '../Category/catContainer';
import Footer from '../footer/Footer';
import productListApp from '../controllers/apps/productListApp';
import { connect } from 'react-redux';
import '../style/partials/_category.scss';

class Category extends productListApp {
    render() {
        console.log("Category data--->", this.state, this.props);
        return (
            <div id="page_wrapper">
                <div className="category-page">
                    <Header />
                    <div id="maincontent" className="page-main">
                        <CatContainer
                            {...this.state}
                            changeView={this.changeView}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect(productListApp.mapStateToProps, productListApp.mapDispatchToProps)(Category);