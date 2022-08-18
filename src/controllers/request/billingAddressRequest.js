import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";
import graphQlQuery from "../lib/graphQlQuery";

const billingAddressRequest = {};

billingAddressRequest.setBillingAddress = async (data) => {
  const regionQry =
    data?.region_id?.length > 0
      ? `region_id: ${data.region_id}`
      : `region: "${data.region}"`;
  const request = JSON.stringify({
    query: `mutation {
        setBillingAddressOnCart(
          input: {
            cart_id: "${getCartId()}"
            billing_address: {
              address: {
                firstname: "${data.firstname}"
                  lastname:"${data.lastname}"
                  street: ["${data.street}"]
                  city: "${data.city}"
                  ${regionQry}
                  country_code: "${data.country_code}"
                  postcode: "${data.postcode}"
                  telephone: "${data.telephone}"
              }
              same_as_shipping: true
            }
          }
        ) {
            cart {
              ${graphQlQuery.cart()}   
            }
        }
      }
      
      `,
  });
  let res = await fetchRequest.executePostFetch(request);
  let cartData = false;
  if (res?.data?.setBillingAddressOnCart?.cart) {
    cartData = cartResponse.parse(res.data.setBillingAddressOnCart.cart);
  }
  return cartData
};

export default billingAddressRequest;
