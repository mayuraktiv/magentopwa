import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import addToCartRequest from "../request/addToCartRequest";

class addToCartApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            qty: 1
        }
    }

    qtyPlus = () => {
        const updateQty = this.state.qty + 1;
        this.setState({
            qty: updateQty
        });
    }

    qtyMinus = () => {
        if (this.state.qty > 1) {
            const updateQty = this.state.qty - 1;
            this.setState({
                qty: updateQty
            });
        }
    }

    addProductToCart = async () => {
        let data = {
            ...this.state,
            sku: this.props.sku
        }
        let nodes = {};
        let nodeValues = {};
        this.setState({ loading: true });
        const cartData = await addToCartRequest.addToCart(data);
        this.setState({ loading: false });
        nodes["product"] = "product";
        nodeValues["product"] = cartData.product;
        if(cartData) {
            this.props.storeData('cart_details', cartData);
        }
    }

    static mapStateToProps = state => {
        return {
            product:state.db.productDetailSlider
        };
    }

    static mapDispatchToProps = dispatch => {
        return {
            storeData: (node, data) => dispatch(reduxActions.replaceData(node, data))
        }
    }
}

export default addToCartApp;