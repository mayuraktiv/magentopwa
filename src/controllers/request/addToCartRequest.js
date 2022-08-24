import fetchRequest from "../lib/fetchRequest";
import getCartId from '../lib/getCartId';
import graphQlQuery from '../lib/graphQlQuery';
import cartResponse from "../response/cartResponse";
import orderRequest from "./orderRequest";
const addToCartRequest = {};

addToCartRequest.addToCart = async (data) => {
    // console.log("dtaa",data)
    const request = JSON.stringify({
        query: `mutation {
            addProductsToCart(
                cartId: "${getCartId()}"
                cartItems: [
                    {
                        quantity: ${data.qty}
                        sku: "${data.sku}"
                    }
                ]
            ) {
                cart {
                    ${graphQlQuery.cart()}   
                }
            }
        }`
    });

    let res = await fetchRequest.executePostFetch(request);
    let cartData = false;
    let orderDetails = false;
    // console.log(res)
    if(res?.data?.addProductsToCart?.cart) {
        cartData = cartResponse.parse(res.data.addProductsToCart.cart);
    }
    orderDetails = orderRequest.getOrderDetails()
    return orderDetails;
    // console.log("cartData",cartData)
}

export default addToCartRequest;