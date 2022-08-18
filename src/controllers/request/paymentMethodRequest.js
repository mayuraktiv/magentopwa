import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";

const paymentMethodRequest = {};

paymentMethodRequest.setPaymentMethod = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        setPaymentMethodOnCart(input: {
            cart_id: "${getCartId()}"
            payment_method: {
                code:"banktransfer"
            }
        }) {
            cart {
              selected_payment_method {
                code
                title
              }
            }
        }
      }`
  });
  let res = await fetchRequest.executePostFetch(request);
  let cartData = false;
  if (res?.data?.setPaymentMethodOnCart?.cart) {
    cartData = cartResponse.parse(res.data.setPaymentMethodOnCart.cart);
  }
};

export default paymentMethodRequest;
