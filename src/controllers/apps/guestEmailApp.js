import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import guestEmailRequest from "../request/guestEmailRequest";
import { validateEmail } from "../validation/checkValidity";

class guestEmailApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isValidEmail: true,
        };
    }

    componentDidMount = () => {
        this.setGuestEmailForm();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.guestEmail !== this.props.guestEmail) {
            this.setGuestEmailForm();
        }
    }

    setGuestEmailForm = () => {
        if (this.props.guestEmail?.length > 0) {
            this.setState({
                email: this.props.guestEmail,
                isValidEmail: validateEmail(this.props.guestEmail)
            });
        }
    }

    onEmailChangeHandler = (event) => {
        this.setState({
            email: event.target.value,
            isValidEmail: validateEmail(event.target.value),
        });
    };

    setGuestEmail = async () => {
        if (validateEmail(this.state.email)) {
            const data = { email: this.state.email };
            const cart_details = await guestEmailRequest.setGuestemail(data);
            if (cart_details) {
                this.props.storeData('cart_details', cart_details);
            }
        }
        else {
            this.setState({ isValidEmail: false });
        }
    };

    static mapStateToProps = (state) => {
        let guestEmail = "";
        if (state.db.cart_details?.email?.length > 0) {
            guestEmail = state.db.cart_details.email
        }
        console.log("mapStateToProps---->", state.db);
        return {
            guestEmail
        };
    };

    static mapDispatchToProps = (dispatch) => {
        return {
            storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
        };
    };
}

export default guestEmailApp;
