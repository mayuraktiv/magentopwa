import localStorageKeys from "../constants/localStorageKeys";
import fetchRequest from "../lib/fetchRequest";
import userprofileRequest from "./userProfileRequest";

const loginUserRequest = {};

loginUserRequest.createUser = async (data) => {
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
    await localStorage.setItem(
      localStorageKeys.AUTHORIZATION_TOKEN,
      res.data.generateCustomerToken.token
    );
    profile = await userprofileRequest.fetchUserProfile();
  
  }
  return profile;
};

export default loginUserRequest;