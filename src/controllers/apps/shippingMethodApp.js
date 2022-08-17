import { Component } from "react";
import paymentMethodRequest from "../request/paymentMethodRequest";
import shippingMethodRequest from "../request/shippingMethodRequest";
import reduxActions from "../redux/actions/reduxActions";

export default class shippingMethodApp extends Component {
  constructor() {
    super();
    this.state = {
      flatrate: "flatrate",
    };
  }

  onvalueChangeHandler = (e) => {
    this.setState({ selected: e.target.value });
    this.setshippingMethod();
  };

  setshippingMethod = async () => {
    const shippingmethoddata = { flatrate: this.state.flatrate };
    const shippingMethod = await shippingMethodRequest.setshippingMethod(
      shippingmethoddata
    );
    if (shippingMethod) {
      this.props.storeData("cart_details", shippingMethod);
    }
  };

  static mapStateToProps = (state) => {
    return {};
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}
