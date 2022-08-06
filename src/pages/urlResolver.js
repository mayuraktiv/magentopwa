import { Fragment } from "react";
import { connect } from "react-redux";
import urlResolverApp from "../controllers/apps/urlResolverApp";
import ProductDetail from "./productDetail";
import ProductListing from "./productListing";

class UrlResolver extends urlResolverApp {
  render() {
    return (
      <Fragment>
        {!this.state.loading ? (
          <Fragment>
            {this.state.urlInfo?.page_type === "CATEGORY" && (
              <ProductListing urlData={this.state.urlInfo} {...this.props} />
            )}
            {this.state.urlInfo?.page_type === "PRODUCT" && (
              <ProductDetail urlData={this.state.urlInfo} {...this.props} />
            )}
          </Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </Fragment>
    );
  }
}

export default connect(urlResolverApp.mapStateToProps)(UrlResolver);
