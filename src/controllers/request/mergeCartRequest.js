import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";
import graphQlQuery from "../lib/graphQlQuery";
import localStorageKeys from "../constants/localStorageKeys";

const mergeCartRequest = {};

mergeCartRequest.mergeCart = async () => {
    const request = JSON.stringify({
        query: `mutation {
            mergeCarts(
                source_cart_id: "${getCartId()}"
            ) {
                ${graphQlQuery.cart()}
            }
        }`,
    });
    let res = await fetchRequest.executePostFetch(request);
    let cartData = false;
    if (res?.data?.mergeCarts) {
        cartData = cartResponse.parse(res.data.mergeCarts);
        if(cartData?.id?.length > 0) {
            localStorage.setItem(localStorageKeys.CART_ID, cartData.id);
        }
    }
    return cartData
};

export default mergeCartRequest;
