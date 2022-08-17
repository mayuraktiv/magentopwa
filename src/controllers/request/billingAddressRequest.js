import getCartId from "../lib/getCartId";
import fetchRequest from "../lib/fetchRequest";
import cartResponse from "../response/cartResponse";
import graphQlQuery from "../lib/graphQlQuery";

const billingAddressRequest = {};

billingAddressRequest.setBillingAddress = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        setBillingAddressOnCart(
          input: {
            cart_id: "${getCartId()}"
            billing_address: {
              address: {
                firstname: "${data.firstname}"
                lastname: "${data.lastname}"
                company: "Magento"
                street: ["Magento Pkwy", "Main Street"]
                city: "${data.city}"
                region: "TX"
                postcode: "${data.pincode}"
                country_code: "US"
                telephone: "${data.telephone}"
                save_in_address_book: true
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
