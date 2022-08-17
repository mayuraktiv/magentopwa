import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";
import graphQlQuery from "../lib/graphQlQuery";

const shippingAddressRequest = {};

shippingAddressRequest.setShippingAddress = async (data) => {
  const regionQry =
    data?.region_id?.length > 0
      ? `region_id: ${data.region_id}`
      : `region: "${data.region}"`;
  const request = JSON.stringify({
    query: `mutation {
        setShippingAddressesOnCart(
          input: {
            cart_id: "${getCartId()}"
            shipping_addresses: [
              {
                address: {
                  firstname: "${data.firstname}"
                  lastname:"${data.lastname}"
                  street: ["${data.street}"]
                  city: "${data.city}"
                  ${regionQry}
                  country_code: "${data.country_code}"
                  postcode: "${data.pincode}"
                  telephone: "${data.telephone}"
                },
              }
            ]
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
  console.log(res);
  let cartData = false;
  if (res?.data?.setShippingAddressesOnCart?.cart) {
    cartData = cartResponse.parse(res.data.setShippingAddressesOnCart.cart);
  }
  console.log("cartDAta", cartData);
  return cartData;
};

export default shippingAddressRequest;
