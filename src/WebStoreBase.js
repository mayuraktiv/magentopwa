import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Category from "../src/pages/Category";
import ProductDetail from "../src/pages/ProductDetail";
import EditCart from "../src/pages/EditCart";
import MyAccount from '../src/pages/MyAccount';
import MyOrders from '../src/pages/MyOrders';
import MyDownloadableProduts from '../src/pages/MyDownloadableProducts';
import MyWishlist from '../src/pages/MyWishlist';
import MyAddressBook from '../src/pages/MyAddressBook';
import MyAccInfo from '../src/pages/MyAccInfo';
import MyProductReview from '../src/pages/MyProductReview';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import ForgotPassword from '../src/pages/ForgotPassword';
// import Checkout from '../src/pages/Checkout';

const WebStoreBase = () => {
  return (
    <Router>
      <div className="app_container" id="outer_container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/edit-cart" component={EditCart} />
           <Route exact path="/myaccount" component={MyAccount} />
                    <Route exact path="/myorders" component={MyOrders} />
                    <Route exact path="/mydownloadableproducts" component={MyDownloadableProduts} />
                    <Route exact path="/mywishlist" component={MyWishlist} />
                    <Route exact path="/myaddressbook" component={MyAddressBook} />
                    <Route exact path="/myaccountinfo" component={MyAccInfo} />
                    <Route exact path="/myproductreview" component={MyProductReview} />
                    <Route exact path="/checkout/login" component={FirstStepCheckout} />
                    <Route exact path="/checkout/shipping" component={SecondStepCheckout} />
                    <Route exact path="/checkout/shippingmethod" component={ThirdStepCheckout} />
                    <Route exact path="/checkout/payment" component={FourthStepCheckout} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/forgotpassword" component={ForgotPassword} />
                    {/* <Route exact path="/checkout" component={Checkout} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default WebStoreBase;
