import { Component } from "react";
import billingAddressRequest from "../request/billingAddressRequest";
import shippingAddressRequest from "../request/shippingAddressRequest";
import reduxActions from "../redux/actions/reduxActions";

class shippingAddressApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: "",
        lastname: "",
        telephone: "",
        street: "",
        city: "",
        country_code: "",
        region: "",
        pincode: "",
      },
      states: [],
    };
  }

  onValueChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updateForm = { ...this.state.form };
    updateForm[name] = value;
    let states = [];
    if (name === "country_code" && value?.length) {
      const country = this.props.countries?.find((item) => item.id === value);
      // console.log("object",country)
      if (country?.regions?.length > 0) {
        states = country.regions;
        // console.log("states",states)
        updateForm["region_id"] = "";
        delete updateForm["region"];
      } else {
        updateForm["region"] = "";
        delete updateForm["region_id"];
      }
    }

    this.setState({
      form: updateForm,
      states: states,
    });
  };

  setShippingAdreess = async (e) => {
    e.preventDefault();
    const shippingAddress = await shippingAddressRequest.setShippingAddress({
      ...this.state.form,
    });

    if (shippingAddress) {
      this.props.storeData("cart_details", shippingAddress);
    }
    // this.setBillingAddress();
  };

  // setBillingAddress = async (e) => {
  //   const billing_address = await billingAddressRequest.setBillingAddress({
  //     ...this.state.form,
  //   });
  //   console.log("object", billing_address);
  // };

  static mapStateToProps = (state) => {
    return {
      countries: state.db.countries?.length > 0 ? state.db.countries : [],
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}

export default shippingAddressApp;
