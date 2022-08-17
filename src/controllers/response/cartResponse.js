import cartParser from "../lib/cartParser";

const cartResponse = {};

cartResponse.parse = (cart) => {
    const cartData = cartParser.parse(cart);
    // console.log("cartresponse",cartData)

    return cartData;
};

export default cartResponse;
