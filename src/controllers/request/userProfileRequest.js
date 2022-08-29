import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";
import userProfileResponse from "../response/userProfileResponse";

const userprofileRequest = {};

userprofileRequest.getUserProfile = async () => {
  const request = JSON.stringify({
    query: `{
      customer {
        firstname
        lastname
        suffix
        email
        addresses {
          firstname
          lastname
          street
          city
          region {
            region_code
            region
          }
          postcode
          country_code
          telephone
          default_billing
          default_shipping
        }
      }
      customerCart {
        ${graphQlQuery.cart()}
      }
    }
    `,
  });
  const res = await fetchRequest.executePostFetch(request);
  let profile = false;
  if (res?.data) {
    profile = userProfileResponse.parse(res.data);
  }
  return profile;
};

export default userprofileRequest;
