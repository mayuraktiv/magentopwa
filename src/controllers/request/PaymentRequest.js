import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";
// import graphQlQuery from "../lib/graphQlQuery";

const paymentRequest = {};

paymentRequest.setPaymentMethod = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        placeOrder(
          input: {
            cart_id: "${getCartId()}"
          }
        ) {
          order {
            order_number
          }
        }
      }`
  });
  let res = await fetchRequest.executePostFetch(request);
  console.log("object",res)
  let cartData = false;
  if (res?.data?.placeOrder?.cart) {
    cartData = cartResponse.parse(res.data.placeOrder.cart);
  }
  console.log("cartData",cartData)
};

export default paymentRequest;
