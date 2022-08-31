import { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import urlResolverApp from "../controllers/apps/urlResolverApp";
import ProductDetail from "./productDetail";
import ProductListing from "./productListing";
import CmsDetail from './CmsDetail'

import CenterLoader from "../loader/CenterLoader";
class UrlResolver extends urlResolverApp {
    render() {
        return (
            <Fragment>
                {!this.state.loading
                    ?
                    <Fragment>
                        {this.state.urlInfo?.page_type === "CATEGORY" &&
                            <ProductListing urlData={this.state.urlInfo} {...this.props} />
                        }
                        {this.state.urlInfo?.page_type === "PRODUCT" &&
                            <ProductDetail urlData={this.state.urlInfo} {...this.props} />
                        }
                        {this.state.urlInfo?.page_type === "CMS" &&
                            <CmsDetail urlData={this.state.urlInfo} {...this.props} />
                        }
                    </Fragment>
                    :
                    <div id="page_wrapper">
                        <Header />
                        <div id="maincontent" className="page-main">
                            <CenterLoader />
                        </div>
                        <Footer />
                    </div>
                }
            </Fragment>
        )
    }
}

export default connect(urlResolverApp.mapStateToProps)(UrlResolver);
