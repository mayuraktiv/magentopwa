import { Component } from "react";
import addReviewRequest from "../request/addReviewRequest";
import { validateField, validateForm } from "../validation/checkValidity";

class addReviewApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nickname: "",
                summary: "",
                text: ""
            },
            validation: {
                nickname: {
                    require: true,
                    type: 'text',
                    valid: true
                },
                summary: {
                    require: true,
                    type: 'text',
                    valid: true
                },
                text: {
                    require: true,
                    type: 'text',
                    valid: true
                }
            },
            isValidForm: false,
            loading: false
        }
        this.setRatingOptions = this.setRatingOptions.bind(this);
    }

    componentDidMount = () => {
        this.setRatingOptions()
    }

    setRatingOptions = () => {
        if (this.props.rating_options?.length > 0) {
            const updateForm = { ...this.state.form };
            const updateValidation = { ...this.state.validation };
            for (let i = 0; i < this.props.rating_options.length; i++) {
                let rating = this.props.rating_options[i];
                updateForm[rating.id] = "";
                updateValidation[rating.id] = {
                    require: true,
                    type: 'text',
                    valid: true
                }
            }
            this.setState({
                form: updateForm,
                validation: updateValidation
            });
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.form, this.state.validation)) {
            const data = {
                ...this.state.form,
                sku: this.props.sku
            }
            this.addReview(data);
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

    setAddReviewForm = () => {
        const updateForm = { ...this.state.form };
        const updateValidation = { ...this.state.validation };
        for (const name in updateForm) {
            updateForm[name] = "";
            updateValidation[name] = {
                require: true,
                type: 'text',
                valid: true
            }
        }
        this.setState({
            form: updateForm,
            validation: updateValidation,
            loading: false,
            isValidForm: false
        });
    }

    addReview = async (data) => {
        this.setState({ loading: true });
        const addReviewData = await addReviewRequest.createReview(data);
        this.setAddReviewForm();
    }

    static mapStateToProps = state => {
        return {
            rating_options: state.db.rating_options
        }
    }
}

export default addReviewApp;