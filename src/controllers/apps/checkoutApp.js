import { Component } from "react";
import guestEmailRequest from "../request/guestEmailRequest";
import { validateEmail } from "../validation/checkValidity";

class checkoutApp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isValidEmail: true,
    };
  }

  onEmailChangeHandler = (event) => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({
      email: event.target.value,
      isValidEmail: validateEmail(event.target.value),
    });
  };

  setGuestEmail = async () => {
    if(validateEmail(this.state.email)) {
        const data = { email: this.state.email };
        const cart_details = await guestEmailRequest.setGuestemail(data);
        console.log("cart_details", cart_details);
    }
    else {
        this.setState({ isValidEmail: false });
    }
  };
}

export default checkoutApp;
