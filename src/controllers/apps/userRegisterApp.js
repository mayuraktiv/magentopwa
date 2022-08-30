import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import { validateField, validateForm } from "../validation/checkValidity";
import userRegisterRequest from "../request/userRegisterRequest";

class userRegisterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      validation: {
        firstname: {
          require: true,
          type: "text",
          valid: true,
        },
        lastname: {
          require: true,
          type: "text",
          valid: true,
        },
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
      this.createNewUser(data);
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

  setAddSignupForm = () => {
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

  createNewUser = async (data) => {
    this.setState({ loading: true });
    const profile = await userRegisterRequest.getRegisteruser(data);

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
      this.props.afterRegister();
    }
    this.setState({ loading: false });
  };

  static mapStateToProps = () => {
    return {};
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.mergeData(node, data)),
    };
  };
}

export default userRegisterApp;
