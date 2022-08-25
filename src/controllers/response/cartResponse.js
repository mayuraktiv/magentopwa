import cartParser from "../lib/cartParser";

const cartResponse = {};

cartResponse.parse = (cart) => {
    const cartData = cartParser.parse(cart);
    return cartData;
};

export default cartResponse;
