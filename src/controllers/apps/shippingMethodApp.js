import { Component } from "react";
import shippingMethodRequest from "../request/shippingMethodRequest";
import reduxActions from "../redux/actions/reduxActions";

export default class shippingMethodApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedMethod: {}
    };
  }

  componentDidMount = () => {
    this.setSelectedShippingMethod();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedMethod !== this.props.selectedMethod) {
      this.setSelectedShippingMethod();
    }
  }

  setSelectedShippingMethod = () => {
    if (this.props.selectedMethod?.method_code?.length > 0) {
      this.setState({
        selectedMethod: this.props.selectedMethod
      });
    }
  }

  onSelectShippingMethod = (method) => {
    this.setState({
      selectedMethod: method
    }, () => {
      this.setshippingMethod();
    });
  };

  setshippingMethod = async () => {
    const cart_details = await shippingMethodRequest.setshippingMethod(this.state.selectedMethod);
    if (cart_details) {
      this.props.storeData("cart_details", cart_details);
    }
  };

  static mapStateToProps = (state) => {
    let shippingMethods = [];
    let selectedMethod = null;
    if (state.db.cart_details?.shipping_adress?.available_shipping_methods?.length > 0) {
      shippingMethods = state.db.cart_details.shipping_adress.available_shipping_methods;
      if (state.db.cart_details.shipping_adress.selected_shipping_method) {
        selectedMethod = state.db.cart_details.shipping_adress.selected_shipping_method;
      }
    }
    return {
      shippingMethods,
      selectedMethod
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}
