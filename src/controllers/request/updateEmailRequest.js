import fetchRequest from "../lib/fetchRequest";
import userprofileRequest from "./userProfileRequest";

const updateEmailRequest = {};
updateEmailRequest.changeCustomerEmail = async (data) => {
  const password = window.sessionStorage.getItem("password")
  const request = JSON.stringify({
    query: `mutation {
        updateCustomerEmail(email: "${data.email}", password: "${password.toString()}") {
          customer {
            email
          }
        }
      }
            
    `,
  });

  const res = await fetchRequest.executePostFetch(request);
  console.log("res",res)
  let profile = false;
  if (res?.data?.updateCustomerEmail?.customer?.email ) {
    profile = await userprofileRequest.getUserProfile();
  }
  return profile
};
export default updateEmailRequest;
