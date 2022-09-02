import fetchRequest from "../lib/fetchRequest";

const changePasswordRequest = {};

changePasswordRequest.changeCustomerPassword = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        changeCustomerPassword(
          currentPassword: "${data.currentPass}"
          newPassword: "${data.NewPassword}"
        ) {
          id
          email
        }
      }         
    `,
  });

  const res = await fetchRequest.executePostFetch(request);
  return res;
};
export default changePasswordRequest;
