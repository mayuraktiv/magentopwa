import fetchRequest from "../lib/fetchRequest";
import getCartId from '../lib/getCartId';
import graphQlQuery from '../lib/graphQlQuery';
import cartResponse from "../response/cartResponse";
const deleteCartRequest = {};

deleteCartRequest.deleteCart = async (data) => {
    const request = JSON.stringify({
        query: `mutation {
            removeItemFromCart(
                input: {
                    cart_id: "${getCartId()}"
                    cart_item_uid: "${data.item_uid}"
                }
            ) {
                cart {
                    ${graphQlQuery.cart()}   
                }
            }
        }`
    });

    let res = await fetchRequest.executePostFetch(request);
    let cartData = false;
    if(res?.data?.removeItemFromCart?.cart) {
        cartData = cartResponse.parse(res.data.removeItemFromCart.cart);
    }
    return cartData
}

export default deleteCartRequest;