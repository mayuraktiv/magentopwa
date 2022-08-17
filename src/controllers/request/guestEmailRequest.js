import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";
import cartResponse from "../response/cartResponse";

const guestEmailRequest = {};

guestEmailRequest.setGuestemail = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        setGuestEmailOnCart(
            input: {
            cart_id: "${getCartId()}"
            email: "${data.email}"
            }
        ) {
            cart {
                ${graphQlQuery.cart()}
                email
            }
        }
    }`,
  });
  let res = await fetchRequest.executePostFetch(request);
  let cartData = false;
    if(res?.data?.setGuestEmailOnCart?.cart) {
        cartData = cartResponse.parse(res.data.setGuestEmailOnCart.cart);
    }
    return cartData
};

export default guestEmailRequest;
