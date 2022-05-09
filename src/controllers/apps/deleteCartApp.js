import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import deleteCartRequest from "../request/deleteCartRequest";

class deleteCartApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
        this.deleteCart = this.deleteCart.bind(this);
    }

    deleteCart = async () => {
        this.setState({ loading: true });
        const cartData = await deleteCartRequest.deleteCart({ item_uid: this.props.item_uid});
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

export default deleteCartApp;