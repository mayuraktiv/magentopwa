import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import updateCartRequest from "../request/updateCartRequest";

class updateCartApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }

        this.qtyMinus = this.qtyMinus.bind(this);
        this.qtyPlus = this.qtyPlus.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }

    qtyMinus = () => {
        const data = {
            qty: parseInt(this.props.qty) - 1,
            item_uid: this.props.item_uid
        }
        this.updateCart(data);
    }

    qtyPlus = () => {
        const data = {
            qty: parseInt(this.props.qty) + 1,
            item_uid: this.props.item_uid
        }
        this.updateCart(data);
    }

    updateCart = async (data) => {
        this.setState({ loading: true });
        const cartData = await updateCartRequest.updateCart(data);
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

export default updateCartApp;