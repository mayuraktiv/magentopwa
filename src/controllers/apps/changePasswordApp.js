import { Component } from "react";
import changePasswordRequest from "../request/changePasswordRequest";
import { validateField, validateForm } from "../validation/checkValidity";
import reduxActions from "../redux/actions/reduxActions";

export default class changePasswordApp extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        currentPass: "",
        NewPassword: "",
        confirmPass: "",
      },
      validation: {
        currentPass: {
          require: true,
          type: "text",
          valid: true,
        },
        NewPassword: {
          require: true,
          type: "text",
          valid: true,
        },
        confirmPass: {
          require: true,
          type: "text",
          valid: true,
        },
      },
      isValidForm: false,
      loading: false,
      checked: false,
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.form, this.state.validation)) {
      const data = {
        ...this.state.form,
      };
      this.changeCustomerPassword(data);
    }
  };

  valueChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updateForm = { ...this.state.form };
    const updateValidation = { ...this.state.validation };
    updateForm[name] = value;
    updateValidation[name].valid = validateField(updateValidation[name], value);
    const isValidForm = validateForm(updateForm, updateValidation);
    this.setState({
      form: updateForm,
      validation: updateValidation,
      isValidForm: isValidForm,
    });
  };

  changeCustomerPassword = async (data) => {
    this.setState({ loading: true });
    const profile = await changePasswordRequest.changeCustomerPassword(data);
    console.log("object", profile);
    if (profile) {
      // this.props.storeData("userdata", profile.userdata);
      this.props.afterEditPassword();
    }
    this.setState({ loading: false });
  };

  static mapStateToProps = (state) => {
    console.log("state", state.db);
    return {
      profile: state.db.userdata,
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}
