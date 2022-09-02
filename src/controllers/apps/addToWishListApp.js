import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import addProductsToWishlistRequest from "../request/addProductsToWishlistRequest";

class addToWishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }


  addProductToWishList = async (productData) => {
    console.log("object",this.props)
    let data = {
      ...this.state,
      sku:productData.sku,
      itemId:productData.product_id
    //   wishlistId: 1,
    //   wishlistItemIds: [parseInt(productData.sku)],
    };
    let nodes = {};
    let nodeValues = {};
    this.setState({ loading: true });
    const wishListData = await addProductsToWishlistRequest.addProductsToWishlist(data);
    this.setState({ loading: false });
    nodes["product"] = "product";
    nodeValues["product"] = wishListData.product;
    if (wishListData) {
      this.props.storeData("wishList", wishListData);
    }
  };

  static mapStateToProps = (state) => {
    return {
      product: state.db.productDetailSlider,
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return {
      storeData: (node, data) => dispatch(reduxActions.replaceData(node, data)),
    };
  };
}

export default addToWishList;
