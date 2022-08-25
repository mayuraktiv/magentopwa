import { Component } from "react";
import billingAddressRequest from "../request/billingAddressRequest";
import reduxActions from "../redux/actions/reduxActions";
import { validateField, validateForm } from "../validation/checkValidity";

class billingAddressApp extends Component {
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
        postcode: "",
      },
      validation: {
        firstname: {
          type: 'text',
          require: true,
          valid: true
        },
        lastname: {
          type: 'text',
          require: true,
          valid: true
        },
        telephone: {
          type: 'number',
          require: true,
          valid: true
        },
        street: {
          type: 'text',
          require: true,
          valid: true
        },
        city: {
          type: 'text',
          require: true,
          valid: true
        },
        country_code: {
          type: 'text',
          require: true,
          valid: true
        },
        region: {
          type: 'text',
          require: true,
          valid: true
        },
        postcode: {
          type: 'text',
          require: true,
          valid: true
        },
      },
      isValidForm: false,
      states: [],
      loading: false
    };
  }

  componentDidMount = () => {
    this.setBillingAddressForm();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedAddress !== this.props.selectedAddress) {
      this.setBillingAddressForm();
    }
  }

  setBillingAddressForm = () => {
    const address = this.props.selectedAddress;
    if (address?.firstname?.length > 0) {
      const updateForm = { ...this.props.selectedAddress };
      const updateValidation = { ...this.state.validation };
      let states = [];
      const country = this.props.countries?.find(item => item.id === address.country_code);
      if (country?.regions?.length > 0) {
        states = country.regions;
      }

      if (address.region_id?.length > 0) {
        updateValidation["region_id"] = {
          type: 'text',
          require: true,
          valid: true
        }
        delete updateValidation["region"];
      }
      else {
        updateValidation["region"] = {
          type: 'text',
          require: true,
          valid: true
        }
        delete updateValidation["region_id"];
      }
      for (let name in address) {
        updateValidation[name].valid = validateField(updateValidation[name], address[name]);
      }
      const isValidForm = validateForm(updateForm, updateValidation);
      this.setState({
        form: updateForm,
        validation: updateValidation,
        states: states,
        isValidForm: isValidForm
      });
    }
  }

  onValueChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updateForm = { ...this.state.form };
    const updateValidation = { ...this.state.validation };
    updateForm[name] = value;
    let states = [...this.state.states];
    if (name === "country_code" && value?.length) {
      const country = this.props.countries?.find((item) => item.id === value);
      if (country?.regions?.length > 0) {
        states = country.regions;
        updateForm["region_id"] = "";
        updateValidation["region_id"] = {
          type: 'text',
          require: true,
          valid: false
        }
        delete updateValidation["region"];
        delete updateForm["region"];
      } else {
        states = [];
        updateForm["region"] = "";
        updateValidation["region"] = {
          type: 'text',
          require: true,
          valid: false
        }
        delete updateValidation["region_id"];
        delete updateForm["region_id"];
      }
    }

    updateValidation[name].valid = validateField(updateValidation[name], value);
    const isValidForm = validateForm(updateForm, updateValidation);

    this.setState({
      form: updateForm,
      validation: updateValidation,
      states: states,
      isValidForm: isValidForm
    });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const billing_address = await billingAddressRequest.setBillingAddress({
      ...this.state.form,
    });
    if (billing_address) {
      this.props.storeData("cart_details", billing_address);
    }
    this.setState({ loading: false });
  };

  static mapStateToProps = (state) => {
    let selectedAddress = null;
    if (state.db.cart_details?.billing_address?.firstname?.length > 0) {
      const address = state.db.cart_details.billing_address;
      const region = {};
      const country = state.db.countries?.find(item => item.id === address.country.code);
      if (country?.regions?.length > 0) {
        const selectedRegion = country.regions.find(item => item.code === address.region.code);
        if (selectedRegion?.code?.length > 0) {
          region['region_id'] = selectedRegion.id.toString();
        }
        else {
          region['region_id'] = address.region.code;
        }
      }
      else {
        region['region'] = address.region.code;
      }
      selectedAddress = {
        firstname: address.firstname,
        lastname: address.lastname,
        telephone: address.telephone,
        city: address.city,
        postcode: address.postcode,
        street: address.street.join(', '),
        country_code: address.country.code,
        ...region
      }
    }
    return {
      selectedAddress: selectedAddress,
      countries: state.db.countries?.length > 0 ? state.db.countries : [],
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}

export default billingAddressApp;
