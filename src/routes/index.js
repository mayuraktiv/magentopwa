import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import EditCart from "../pages/EditCart";
import ConfigProvider from "../controllers/contexts/config";
import UrlResolver from "../pages/urlResolver";

const MainRouter = () => {
    return (
        <ConfigProvider>
            <Router>
                <div className="app_container" id="outer_container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/edit-cart" component={EditCart} />
                        <Route path="/*" component={UrlResolver}/>
                    </Switch>
                </div>
            </Router>
        </ConfigProvider>
    );
};

export default MainRouter;