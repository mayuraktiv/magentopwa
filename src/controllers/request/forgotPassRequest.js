import fetchRequest from "../lib/fetchRequest";

const forgotPassRequest = {};

forgotPassRequest.requestPassResetEmail = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        requestPasswordResetEmail(
          email: "${data.email}"
        )
      }
      
    `,
  });

  const res = await fetchRequest.executePostFetch(request);
  return res
};
export default forgotPassRequest;
