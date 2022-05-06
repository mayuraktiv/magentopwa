import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import EditCart from "../pages/EditCart";
import ConfigProvider from "../controllers/contexts/config";
import CartProvider from "../controllers/contexts/cart";
import UrlResolver from "../pages/urlResolver";

const MainRouter = () => {
    return (
        <ConfigProvider>
            <CartProvider>
                <Router>
                    <div className="app_container" id="outer_container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/edit-cart" component={EditCart} />
                            <Route path="/*" component={UrlResolver} />
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        </ConfigProvider>
    );
};

export default MainRouter;