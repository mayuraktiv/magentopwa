import { connect } from "react-redux";
import CartContext from "./cartContext";

const CartProvider = (props) => {
    return (
        <CartContext.Provider value={{ cart_details: props.cart_details }} {...props} />
    );
}

CartProvider.mapStateToProps = state => {

    return {
        cart_details: state.db.cart_details
    }
}

export default connect(CartProvider.mapStateToProps)(CartProvider);