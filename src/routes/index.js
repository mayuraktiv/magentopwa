import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ConfigProvider from "../controllers/contexts/config";
import CartProvider from "../controllers/contexts/cart";
import UrlResolver from "../pages/urlResolver";
import Cart from "../pages/Cart";

const MainRouter = () => {
    return (
        <ConfigProvider>
            <CartProvider>
                <Router>
                    <div className="app_container" id="outer_container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/checkout/cart/" component={Cart} />
                            <Route path="/*" component={UrlResolver} />
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        </ConfigProvider>
    );
};

export default MainRouter;