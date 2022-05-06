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
        this.setState({ loading: true });
        const cartData = await addToCartRequest.addToCart(data);
        this.setState({ loading: false });
        if(cartData) {
            this.props.storeData('cart_details', cartData);
        }
    }

    static mapStateToProps = state => {
        return {};
    }

    static mapDispatchToProps = dispatch => {
        return {
            storeData: (node, data) => dispatch(reduxActions.replaceData(node, data))
        }
    }
}

export default addToCartApp;