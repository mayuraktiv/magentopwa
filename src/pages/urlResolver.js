import { Fragment } from "react";
import { connect } from "react-redux";
import urlResolverApp from "../controllers/apps/urlResolverApp";
import ProductDetail from "./productDetail";
import ProductListing from "./productListing";

class UrlResolver extends urlResolverApp {
    render() {
        console.log("UrlResolver--->", this.state);
        return (
            <Fragment>
                {!this.state.loading 
                    ?
                    <Fragment>
                        {this.state.urlInfo?.page_type === "CATEGORY" &&
                            <ProductListing urlInfo={this.state.urlInfo} {...this.props}/>
                        }
                        {this.state.urlInfo?.page_type === "PRODUCT" &&
                            <ProductDetail urlInfo={this.state.urlInfo} {...this.props}/>
                        }
                    </Fragment>
                    :
                    <div>Loading...</div>
                }
            </Fragment>
        )
    }
}

export default connect(urlResolverApp.mapStateToProps)(UrlResolver);
