import { Component } from "react";
import paymentMethodRequest from "../request/paymentMethodRequest";
import paymentRequest from "../request/PaymentRequest";
import reduxActions from "../redux/actions/reduxActions";

export default class paymentMethodApp extends Component {
  constructor() {
    super();
    this.state = {
      payment: {}
    };
  }

  onValueChangeHandler = (e) => {
    this.setState({ payment: e.target.value });
    this.setPaymentMethod();
  };

  setPaymentMethod = async () => {
    const payment = { payment: this.state.payment };
    const paymentmethod = await paymentRequest.setPaymentMethod(payment);
    if (paymentmethod) {
      this.props.storeData("cart_details", paymentmethod);
    }
  };

  static mapStateToProps = (state) => {
    return {
        // state:console.log("state",state)
    }
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}
