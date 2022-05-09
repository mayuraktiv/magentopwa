import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import productDetailSliderRequest from "../request/productDetailSliderRequest";

class productDetailSliderApp extends Component {
    constructor(props) {
        super(props);
        this.fetchProducts = this.fetchProducts.bind(this);
    }

    componentDidMount = () => {
        this.fetchProducts();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.sku !== this.props.sku) {
            this.fetchProducts();
        }
    }

    fetchProducts = async () => {
        const data = {
            sku: this.props.sku
        }
        const productData = await productDetailSliderRequest.fetchProducts(data);
        if (productData) {
            const productDetailSlider = {
                sku: productData.sku,
                data: {
                    related_products: productData.related_products.product_skus,
                    crosssell_products: productData.crosssell_products.product_skus,
                    upsell_products: productData.upsell_products.product_skus
                }
            }
            const products = [
                ...productData.related_products.products,
                ...productData.crosssell_products.products,
                ...productData.upsell_products.products
            ]
            const nodes = {};
            const nodeValues = {};
            nodes["products"] = "products";
            nodeValues["products"] = products;
            nodes["productDetailSlider"] = "productDetailSlider";
            nodeValues["productDetailSlider"] = productDetailSlider;
            this.props.storeData(nodes, nodeValues);
        }
    }

    static mapStateToProps = (state, ownProps) => {
        let productDetailSliderData = state.db.productDetailSlider.find(item => item.sku === ownProps.sku);
        return {
            productDetailSlider: productDetailSliderData ? productDetailSliderData : null
        }
    }

    static mapDispatchToProps = dispatch => {
        return {
            storeData: (node, data) => dispatch(reduxActions.mergeData(node, data))
        }
    }
}

export default productDetailSliderApp;