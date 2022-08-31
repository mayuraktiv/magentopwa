import guestEmailApp from '../controllers/apps/guestEmailApp';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class CheckoutEmail extends guestEmailApp {
    onLoginClick = () => {
        this.props.history.replace({
            pathname: '/customer/account/login/',
            state: { redirectPath: this.props.location.pathname }
        })
    }

    render() {
        console.log("CheckoutEmail---->", this.props);
        return (
            <div className='checkout_first_step box1'>
                <h3 className='checkout-title'><span className='mark'></span><span>Email</span></h3>
                <span className='authentication-link'>
                    Already have an account? Login
                    <span>
                        <a className='custom_link' onClick={this.onLoginClick}>here</a>
                    </span>
                </span>
                <div className='row'>
                    <div className='col-des-6 col-tb-6 col-mb-12' style={{ minWidth: '100%' }}>
                        <div className='field email required'>
                            <label className='label' for='emial'>
                                <span>Email Address</span>
                            </label>
                            <div className='control'>
                                <input type='email' id='email' name="email" value={this.state.email} className='input-text' onChange={this.onEmailChangeHandler} onBlur={this.setGuestEmail} />
                                {!this.state.isValidEmail &&
                                    <div className="input-error-message">
                                        Please enter valid email
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <span className='authentication-desc'>You can create an account after checkout.</span>
            </div>
        );
    }
}

export default connect(guestEmailApp.mapStateToProps, guestEmailApp.mapDispatchToProps)(withRouter(CheckoutEmail));