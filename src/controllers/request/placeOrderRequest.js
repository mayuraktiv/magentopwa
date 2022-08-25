import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import emptyCartRequest from "./emptyCartRequest";

const placeOrderRequest = {};

placeOrderRequest.placeOrder = async () => {
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
      }
      `,
  });
  let res = await fetchRequest.executePostFetch(request);
  let orderData = false;
  if (res?.data?.placeOrder?.order?.order_number?.length > 0) {
    orderData = res.data.placeOrder.order;
    const emptyCart = await emptyCartRequest.createEmptyCart();
  }
  return orderData;
};

export default placeOrderRequest;