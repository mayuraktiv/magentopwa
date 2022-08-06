import fetchRequest from "../lib/fetchRequest";
import getCartId from '../lib/getCartId';
import graphQlQuery from '../lib/graphQlQuery';
import cartResponse from "../response/cartResponse";
const promoBoxRequest = {};

promoBoxRequest.applyCouponCode = async (data) => {
    const request = JSON.stringify({
        query: `mutation {
            applyCouponToCart(
                input: {
                    cart_id: "${getCartId()}"
                    coupon_code: "${data.coupon_code}"
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
    if(res?.data?.applyCouponToCart?.cart) {
        cartData = cartResponse.parse(res.data.applyCouponToCart.cart);
    }
    return cartData
}

export default promoBoxRequest;