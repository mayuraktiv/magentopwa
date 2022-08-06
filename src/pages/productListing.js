import React from 'react';
import Header from '../header/Header';
import CatContainer from '../Category/catContainer';
import Footer from '../footer/Footer';
import productListApp from '../controllers/apps/productListApp';
import { connect } from 'react-redux';
import '../style/partials/_category.scss';

class ProductListing extends productListApp {
    render() {
        return (
            <div id="page_wrapper">
                <div className="category-page">
                    <Header />
                    <div id="maincontent" className="page-main">
                        {this.props.productListingData &&
                            <CatContainer
                                {...this.state}
                                {...this.props.productListingData.data}
                                changeView={this.changeView}
                                setFilterAndSort={this.setFilterAndSort}
                                loadMoreProducts={this.loadMoreProducts}
                            />
                        }
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect(productListApp.mapStateToProps, productListApp.mapDispatchToProps)(ProductListing);