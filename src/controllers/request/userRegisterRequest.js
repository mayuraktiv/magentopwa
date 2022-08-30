import fetchRequest from "../lib/fetchRequest";
import loginRequest from "./loginRequest";
import mergeCartRequest from "./mergeCartRequest";

const userRegisterRequest = {};

userRegisterRequest.getRegisteruser = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
            createCustomerV2(
              input: {
                firstname: "${data.firstname}"
                lastname: "${data.lastname}"
                email: "${data.email}"
                password: "${data.password}"
              }
            ) {
              customer {
                firstname
                lastname
                email    
              }
            }
          }
          `,
  });
  const res = await fetchRequest.executePostFetch(request);
  let profile = false;
  if (res?.data?.createCustomerV2?.customer) {
    profile = await loginRequest.login(data);
    if (profile.cart_details) {
      const cart_details = await mergeCartRequest.mergeCart();
      if (cart_details) {
        profile["cart_details"] = cart_details;
      }
    }
  }
  return profile;
};

export default userRegisterRequest;
