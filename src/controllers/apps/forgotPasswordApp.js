import { Component } from "react";
import forgotPassRequest from "../request/forgotPassRequest";
import { validateField, validateForm } from "../validation/checkValidity";
class forgotPasswordApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
      },
      validation: {
        email: {
          require: true,
          type: "email",
          valid: true,
        },
      },
      isValidForm: false,
      loading: false,
    };
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.form, this.state.validation)) {
      const data = {
        ...this.state.form,
      };
      this.requestPasswordResetEmail(data);
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

  requestPasswordResetEmail = async (data) => {
    this.setState({ loading: true });
    console.log("data",data)
    const profile = await forgotPassRequest.requestPassResetEmail(data);
    return profile;
  };
}

export default forgotPasswordApp;
