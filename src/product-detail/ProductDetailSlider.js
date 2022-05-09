import { Fragment } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import productDetailSliderApp from "../controllers/apps/productDetailSliderApp";
import ProductSlider from "../product/ProductSlider";

class ProductDetailSlider extends productDetailSliderApp {
    render() {
        return (
            <Fragment>
                {this.props.productDetailSlider &&
                    <div className={classNames('product_widget_row', this.props.className)}>
                        <div className="frame">
                            <div className="row">
                                <div className="col-md-12">
                                    {this.props.productDetailSlider.data.related_products?.length > 0 &&
                                        <div className="product-slider-box">
                                            <h3>Related Products</h3>
                                            <ProductSlider product_skus={this.props.productDetailSlider.data.related_products}/>
                                        </div>
                                    }
                                    {this.props.productDetailSlider.data.upsell_products?.length > 0 &&
                                        <div className="product-slider-box">
                                            <h3>Up-Sell Products</h3>
                                            <ProductSlider product_skus={this.props.productDetailSlider.data.upsell_products}></ProductSlider>
                                        </div>
                                    }
                                    {this.props.productDetailSlider.data.crosssell_products?.length > 0 &&
                                        <div className="product-slider-box">
                                            <h3>Cross-Sell Products</h3>
                                            <ProductSlider product_skus={this.props.productDetailSlider.data.crosssell_products}></ProductSlider>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
}

export default connect(productDetailSliderApp.mapStateToProps, productDetailSliderApp.mapDispatchToProps)(ProductDetailSlider);