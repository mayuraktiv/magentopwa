import React, { Component } from "react";
import "./style/base.scss";
import MainRouter from "./routes/index";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    );
  }
}
