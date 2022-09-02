import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ConfigProvider from "../controllers/contexts/config";
import AuthProvider from "../controllers/contexts/auth";
import CartProvider from "../controllers/contexts/cart";
import UrlResolver from "../pages/urlResolver";
import Cart from "../pages/Cart";
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import MyWishlist from '../pages/MyWishlist';
import Register from '../pages/Register';
import MyOrders from '../pages/MyOrders';
import MyDownloadableProduts from '../pages/MyDownloadableProducts';
import MyAddressBook from '../pages/MyAddressBook';
import MyAccInfo from '../pages/MyAccInfo';
import MyProductReview from '../pages/MyProductReview';
import ForgotPassword from '../pages/ForgotPassword';
import Checkout from '../pages/Checkout';
import PrivateRoute from "./PrivateRoute";
import AddAddress from "../pages/AddAddress";
import EditAddress from "../pages/EditAddress";
import OrderSuccess from "../pages/OrderSuccess";
import ChangePassword from "../pages/ChangePassword";
import EditAccountInfo from "../pages/EditAccountInfo";
import ShareWishList from "../pages/ShareWishList";
const MainRouter = () => {
    return (
        <AuthProvider>
            <ConfigProvider>
                <CartProvider>
                    <Router>
                        <div className="app_container" id="outer_container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/checkout/cart/" component={Cart} />
                                <Route exact path="/customer/account/login/" component={Login} />
                                <Route exact path="/checkout/onepage/success/" component={OrderSuccess} />
                                <PrivateRoute exact path="/customer/account/" component={MyAccount} />
                                <PrivateRoute exact path="/customer/account/edit/changepass" component={ChangePassword} />
                                <PrivateRoute exact path="/customer/account/edit/" component={EditAccountInfo} />
                                <PrivateRoute exact path="/wishlist/" component={MyWishlist} />
                                <PrivateRoute exact path="/wishlist/index/share/" component={ShareWishList} />
                                <Route exact path="/customer/account/create/" component={Register} />
                                <PrivateRoute exact path="/sales/order/history/" component={MyOrders} />
                                <Route exact path="/mydownloadableproducts" component={MyDownloadableProduts} />
                                <PrivateRoute exact path="/customer/address/" component={MyAddressBook} />
                                <PrivateRoute exact path="/customer/address/new/" component={AddAddress} />
                                <PrivateRoute exact path="/customer/address/edit/id/:id" component={EditAddress} />
                                <PrivateRoute exact path="/myaccountinfo" component={MyAccInfo} />
                                <Route exact path="/myproductreview" component={MyProductReview} />
                                <Route exact path="/customer/account/forgotpassword/" component={ForgotPassword} />
                                <Route exact path="/checkout" component={Checkout} />
                                <Route path="/*" component={UrlResolver} />
                            </Switch>
                        </div>
                    </Router>
                </CartProvider>
            </ConfigProvider>
        </AuthProvider>
    );
};

export default MainRouter;