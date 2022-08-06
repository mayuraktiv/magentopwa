import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import promoBoxRequest from "../request/promoBoxRequest";
import { validateField, validateForm } from "../validation/checkValidity";

class promoBoxApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                coupon_code: ""
            },
            validation: {
                coupon_code: {
                    require: true,
                    type: 'text',
                    valid: true
                }
            },
            isValidForm: false,
            loading: false
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.form, this.state.validation)) {
            const data = { ...this.state.form }
            this.applyCouponCode(data);
        }
    }

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
            isValidForm: isValidForm
        });
    }

    applyCouponCode = async (data) => {
        this.setState({ loading: true });
        const cartData = await promoBoxRequest.applyCouponCode(data);
        this.setState({ loading: false });
        if(cartData) {
            this.props.storeData('cart_details', cartData);
        }
    }

    static mapStateToProps = state => {
        return {};
    }

    static mapDispatchToProps = dispatch => {
        return {
            storeData: (node, data) => dispatch(reduxActions.replaceData(node, data))
        }
    }
}

export default promoBoxApp;