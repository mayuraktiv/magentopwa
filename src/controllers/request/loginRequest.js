import localStorageKeys from "../constants/localStorageKeys";
import fetchRequest from "../lib/fetchRequest";
import mergeCartRequest from "./mergeCartRequest";
import userProfileRequest from "./userProfileRequest";

const loginRequest = {};

loginRequest.login = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
      generateCustomerToken(
        email: "${data.email}"
        password: "${data.password}"
      ) {
        token              
      }
    }`,
  });

  let res = await fetchRequest.executePostFetch(request);
  let profile = false;
  if (res.data?.generateCustomerToken?.token) {
    window.sessionStorage.setItem("password", data.password);
    await localStorage.setItem(
      localStorageKeys.AUTHORIZATION_TOKEN,
      res.data.generateCustomerToken.token
    );
    profile = await userProfileRequest.getUserProfile();
    if(profile.cart_details){
      const cart_details = await mergeCartRequest.mergeCart();
      if(cart_details) {
        profile['cart_details'] = cart_details;
      }
    }
  }

  return profile;
};

export default loginRequest;
