import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";
import graphQlQuery from "../lib/graphQlQuery";

const paymentMethodRequest = {};

paymentMethodRequest.setPaymentMethod = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        setPaymentMethodOnCart(input: {
          cart_id: "${getCartId()}"
          payment_method: {
            code:"${data.code}"
          }
        }) {
          cart {
            ${graphQlQuery.cart()}
          }
        }
      }`
  });
  let res = await fetchRequest.executePostFetch(request);
  let cartData = false;
  if (res?.data?.setPaymentMethodOnCart?.cart) {
    cartData = cartResponse.parse(res.data.setPaymentMethodOnCart.cart);
  }
  return cartData;
};

export default paymentMethodRequest;