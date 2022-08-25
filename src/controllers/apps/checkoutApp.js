import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import placeOrderRequest from "../request/placeOrderRequest";

class checkoutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  static mapStateToProps = (state) => {
    let isValidCheckout = false;
    let isValidGuest = false;
    let isValidShippingAddress = false;
    let isValidShippingMethod = false;
    let isValidBillingAddress = false;
    let isValidPaymentMethod = false;
    console.log("state.db.cart_details--->", state.db.cart_details);
    if (state.db.cart_details?.total_quantity > 0) {
      const cart_details = state.db.cart_details;
      // Validating guest email
      if (cart_details?.email?.length > 0) {
        isValidGuest = true;
      }

      // Validating shipping address and shipping method
      if (cart_details.shipping_adress?.firstname?.length > 0) {
        isValidShippingAddress = true;
        if (cart_details.shipping_adress.selected_shipping_method?.method_code?.length > 0) {
          isValidShippingMethod = true;
        }
      }

      // Validating billing address
      if (cart_details.billing_address?.firstname?.length > 0) {
        isValidBillingAddress = true;
      }

      // Validating billing address
      if (cart_details.selected_payment_method?.code?.length > 0) {
        isValidPaymentMethod = true;
      }
    }
    if (state.db.user_status) {
      isValidGuest = true;
    }

    if (isValidGuest && isValidShippingAddress && isValidShippingMethod && isValidBillingAddress && isValidPaymentMethod) {
      isValidCheckout = true;
    }
    return {
      isValidCheckout
    };
  };

  placeOrder = async () => {
    this.setState({ loading: true });
    const order = await placeOrderRequest.placeOrder();
    if (order?.order_number?.length > 0) {
      this.props.storeData('cart_details', null);
      this.props.history.push('/');
    }
    this.setState({ loading: true });
  }

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}

export default checkoutApp;
