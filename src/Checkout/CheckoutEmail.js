import checkoutApp from '../controllers/apps/checkoutApp';

export default class CheckoutEmail extends checkoutApp {
    render() {
        return (
            <div className='checkout_first_step box1'>
               <h3 className='checkout-title'><span className='mark'></span><span>Email</span></h3>
               <span className='authentication-link'>Already have an account? Login <span><a href='#'>here</a></span></span>
               <div className='row'>
                   <div className='col-des-6 col-tb-6 col-mb-12'>
                   <div className='field email required'>
                        <label className='label' for='emial'>
                            <span>Email Address</span>
                        </label>
                        
                        <div className='control'>
                            <input type='email' id='email' name="email" value={this.state.email} className='input-text' onChange={this.onEmailChangeHandler} onBlur={this.setGuestEmail}/>
                            {!this.state.isValidEmail && <p style={{color:"red"}}>Please Enter Valid Email</p>}
                        </div>
                    </div>
                   </div>
               </div>
               <span className='authentication-desc'>You can create an account after checkout.</span>
            </div>
        );
    }
}

