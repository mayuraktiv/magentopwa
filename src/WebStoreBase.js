import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Category from "../src/pages/Category";
import ProductDetail from "../src/pages/ProductDetail";
import EditCart from "../src/pages/EditCart";

const WebStoreBase = () => {
  return (
    <Router>
      <div className="app_container" id="outer_container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/edit-cart" component={EditCart} />
        </Switch>
      </div>
    </Router>
  );
};

export default WebStoreBase;
