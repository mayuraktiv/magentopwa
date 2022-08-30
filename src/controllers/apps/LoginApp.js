import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import loginRequest from "../request/loginRequest";
import { validateField, validateForm } from "../validation/checkValidity";

class LoginApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
      },
      validation: {
        email: {
          require: true,
          type: "email",
          valid: true,
        },
        password: {
          require: true,
          type: "text",
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
      this.addLoginUser(data);
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

  setAddLoginForm = () => {
    const updateForm = { ...this.state.form };
    const updateValidation = { ...this.state.validation };
    for (const name in updateForm) {
      updateForm[name] = "";
      updateValidation[name] = {
        require: true,
        type: "text",
        valid: true,
      };
    }
    this.setState({
      form: updateForm,
      validation: updateValidation,
      loading: false,
      isValidForm: false,
    });
  };

  addLoginUser = async (data) => {
    this.setState({ loading: true });
    const profile = await loginRequest.login(data);
    if (profile) {
      let nodes = {};
      let nodeValues = {};
      nodes["cart_details"] = "cart_details";
      nodeValues["cart_details"] = profile.cart_details;

      nodes["userdata"] = "userdata";
      nodeValues["userdata"] = profile.userdata;

      nodes["user_status"] = "user_status";
      nodeValues["user_status"] = true;
      this.props.storeData(nodes, nodeValues);
      this.props.afterLogin();
    }
    this.setState({ loading: false });
  };

  static mapStateToProps = state => {
    return {};
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.mergeData(node, data)),
    };
  };
}

export default LoginApp;
