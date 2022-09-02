import { Component } from "react";
import { validateField, validateForm } from "../validation/checkValidity";
import reduxActions from "../redux/actions/reduxActions";
import updateEmailRequest from "../request/updateEmailRequest";

export default class editEmailApp extends Component {
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
      checked: false,
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.form, this.state.validation)) {
      const data = {
        ...this.state.form,
      };
      this.editCustomerEmail(data);
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

  editCustomerEmail = async (data) => {
    this.setState({ loading: true });
    const profile = await updateEmailRequest.changeCustomerEmail(data);
    if (profile) {
      this.props.storeData("userdata", profile.userdata);
      this.props.afterEditEmail();
    }
    this.setState({ loading: false });
  };

  static mapStateToProps = (state) => {
    // console.log("state", state.db);
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
