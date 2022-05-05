import { Component } from "react";

class proBoxApp extends Component {
    static mapStateToProps = (state, ownProps) => {
        const products = state.db.products;
        return {
            productData: products.find(item => item.sku === ownProps.sku)
        }
    }
}

export default proBoxApp;