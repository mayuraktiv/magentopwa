import React, { Component } from "react";
import ProBoxWishlist from "../product/ProboxWishlist";
import MainSidebar from "../MyAccount/MainSidebar";
import { Link } from "react-router-dom";

export default class Wishlist extends Component {
  render() {
    return (
      <div className="columns frame">
        <MainSidebar/>

        <div className="column main">
          <div className="product-grid">
            <div className="product_slide_row">
              {/* <ProBoxWishlist/> */}
            </div>
          </div>
          <div className="control-buttons">
            <div className="row">
              <div className="col-des-4 col-tb-4 col-mb-12">
                <button className="btn wishlist-update">
                  Update Wish List
                </button>
              </div>
              <div className="col-des-4 col-tb-4 col-mb-12">
                <Link to="/wishlist/index/share/" className="btn btn-bg">Share Wish List</Link>
              </div>
              <div className="col-des-4 col-tb-4 col-mb-12">
                <button className="btn add-all">Add All to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
