import { Component } from "react";
import paymentMethodRequest from "../request/paymentMethodRequest";
import reduxActions from "../redux/actions/reduxActions";

export default class paymentMethodApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMethod: ""
    };
  }

  componentDidMount = () => {
    this.setSelectedMethod();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedMethod !== this.props.selectedMethod) {
      this.setSelectedMethod();
    }
  }

  setSelectedMethod = () => {
    this.setState({ selectedMethod: this.props.selectedMethod });
  }

  onPaymentMethodChange = (e) => {
    this.setState({
      selectedMethod: e.target.value
    },
      () => {
        this.setPaymentMethod();
      });
  };

  setPaymentMethod = async () => {
    const data = { code: this.state.selectedMethod };
    const paymentmethod = await paymentMethodRequest.setPaymentMethod(data);
    if (paymentmethod) {
      this.props.storeData("cart_details", paymentmethod);
    }
  };

  static mapStateToProps = (state) => {
    let paymentMethods = [];
    let selectedMethod = "";
    console.log("state.db.cart_details---->", state.db.cart_details);
    if (state.db.cart_details?.available_payment_methods?.length > 0) {
      paymentMethods = state.db.cart_details.available_payment_methods;
      if (state.db.cart_details.selected_payment_method?.code?.length > 0) {
        selectedMethod = state.db.cart_details.selected_payment_method.code;
      }
    }
    return {
      paymentMethods,
      selectedMethod
    }
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}
