import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../style/partials/_checkout.scss";

const OrderSuccess = (props) => {
    useEffect(() => {
        if(!props.location.state) {
            props.history.replace('/');
        }
    }, [props.location]);
    
    return (
        <div id="page_wrapper">
            <div className="checkout-page">
                <Header />
                <div id="maincontent" className="page-main">
                    <div className="checkout_page_main_container">
                        <div className="checkout_content">
                            <div className="order-success-container">
                                <h3>Thank you for your purchase!</h3>
                                <p>
                                    Your order # is: {props.location.state?.order?.order_number}.
                                    <br />
                                    We'll email you an order confirmation with details and tracking info.
                                </p>
                                <button type="button" className="btn btn-default">Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default OrderSuccess;