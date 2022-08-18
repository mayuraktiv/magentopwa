import guestEmailApp from '../controllers/apps/guestEmailApp';
import { connect } from "react-redux";

class CheckoutEmail extends guestEmailApp {
    render() {
        return (
            <div className='checkout_first_step box1'>
                <h3 className='checkout-title'><span className='mark'></span><span>Email</span></h3>
                <span className='authentication-link'>Already have an account? Login <span><a href='#'>here</a></span></span>
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

export default connect(guestEmailApp.mapStateToProps, guestEmailApp.mapDispatchToProps)(CheckoutEmail);