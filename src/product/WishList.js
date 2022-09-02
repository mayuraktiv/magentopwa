import React from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import classnames from "classnames";
import "../style/base.scss";
import addToWishList from "../controllers/apps/addToWishListApp";

export default class WishList extends addToWishList {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classnames("wishlist_block", this.props.className)}>
        {!this.state.loading ? (
          <Link
          to="/gear.html"
            className="wish_link d-flex align-items-center justify-content-center"
          >
            <i
              className="material-icons"
              onClick={() => {
                this.addProductToWishList(this.props.productData);
                // console.log(this.props.productData, "this.props.productData");
              }}
            >
              favorite
            </i>
          </Link>
        ) : (
          <button
            className="addcart_btn"
            type="button"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            <CircularProgress color="#fff" size={25} />
          </button>
        )}
      </div>
    );
  }
}
