import { Component } from "react";

class productDetailApp extends Component {
  static mapStateToProps = (state, ownProps) => {
    const productDetail = state.db.products.find(
      (item) => item.url_key === ownProps.urlData.url_key
    );
    return {
      productDetail: productDetail,
      loading: productDetail ? false : true,
    };
  };
}

export default productDetailApp;
