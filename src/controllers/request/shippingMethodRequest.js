import fetchRequest from "../lib/fetchRequest";
import getCartId from "../lib/getCartId";
import graphQlQuery from "../lib/graphQlQuery";
import cartResponse from "../response/cartResponse";

const shippingMethodRequest = {};

shippingMethodRequest.setshippingMethod = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
      setShippingMethodsOnCart(
        input: {
          cart_id: "${getCartId()}",
          shipping_methods: [
            {
              carrier_code: "${data.carrier_code}"
              method_code: "${data.method_code}"
            }
          ]
        }
      )  {
          cart {
            ${graphQlQuery.cart()}   
          }
        }
      }
    `,
  });

  const res = await fetchRequest.executePostFetch(request);
  let cartData = false;
  if (res?.data?.setShippingMethodsOnCart?.cart) {
    cartData = cartResponse.parse(res.data.setShippingMethodsOnCart.cart);
  }
  return cartData
};
export default shippingMethodRequest;
