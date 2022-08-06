import React, { Component } from "react";
import classnames from "classnames";
//import { Link } from 'react-router-dom';

import SwitcherLanguage from "./SwitcherLanguage";
import SwitcherCurrency from "./SwitcherCurrency";

export default class TopHeader extends Component {

  render() {
 
    return (
      <div className={classnames("top_header", this.props.className)}>
        <div className="frame">
          <div className="row align-items-center">
            <div className="col-8 custom-link">
              <div className="top-custom-link">
                <ul className="d-flex align-items-center p-0 mb-0">
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="material-icons">phone</span>
                      <span>+01 23456789</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="material-icons">email</span>
                      <span>claue@domain.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="material-icons">
                        directions_car_filled
                      </span>
                      <span>Track Your Order</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="material-icons">location_on</span>
                      <span>Store Locator</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="header-set d-flex">
                <SwitcherLanguage></SwitcherLanguage>
                <SwitcherCurrency></SwitcherCurrency>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
