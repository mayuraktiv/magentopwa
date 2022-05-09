import fetchRequest from "../lib/fetchRequest";
import getCartId from '../lib/getCartId';
import graphQlQuery from '../lib/graphQlQuery';
import cartResponse from "../response/cartResponse";
const updateCartRequest = {};

updateCartRequest.updateCart = async (data) => {
    const request = JSON.stringify({
        query: `mutation {
            updateCartItems(
                input: {
                    cart_id: "${getCartId()}"
                    cart_items: [
                        {
                            cart_item_uid: "${data.item_uid}"
                            quantity: ${data.qty}
                        }
                    ]
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
    if(res?.data?.updateCartItems?.cart) {
        cartData = cartResponse.parse(res.data.updateCartItems.cart);
    }
    return cartData
}

export default updateCartRequest;