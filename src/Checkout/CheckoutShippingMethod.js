import { Fragment } from "react";
import { connect } from "react-redux";
import shippingMethodApp from "../controllers/apps/shippingMethodApp";

class CheckoutShippingMethod extends shippingMethodApp {
  render() {
    return (
      <div className="shipping_method">
        {this.props.shippingMethods?.length > 0
          ?
          <Fragment>
            {this.props.shippingMethods.map(item => (
              <Fragment key={`shipping-method-${item.method_code}`}>
                {item.available &&
                  <div className="custom_radio_box">
                    <input
                      type="radio"
                      id={`shipping-method-${item.method_code}`}
                      name="shipping_method"
                      value="flatrate"
                      checked={this.state.selectedMethod.method_code === item.method_code}
                      onChange={() => this.onSelectShippingMethod(item)}
                    />
                    <label className="custom_radio_label" htmlFor={`shipping-method-${item.method_code}`}>
                      {item.amount?.value > 0 &&
                        <span className="checkout_fixed_rate">{item.amount.currency} {item.amount.value}</span>
                      }
                      <span>{item.method_title} {item.carrier_title}</span>
                    </label>
                  </div>
                }
              </Fragment>
            ))}
          </Fragment>
          :
          <div className="input-error-message">
            Please select shipping address
          </div>
        }
      </div>
    );
  }
}
export default connect(shippingMethodApp.mapStateToProps, shippingMethodApp.mapDispatchToProps)(CheckoutShippingMethod)