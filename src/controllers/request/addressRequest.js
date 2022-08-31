import fetchRequest from "../lib/fetchRequest";
import userprofileRequest from "./userProfileRequest";

const addressRequest = {};

addressRequest.saveAddress = async (data) => {
  const regionQry =
    data?.region_id?.length > 0
      ? `region: { region_id	: ${data.region_id}}`
      : `region: { region: "${data.region}"}`;
  const request = JSON.stringify({
    query: `mutation {
        ${data.type === "edit" ? `updateCustomerAddress` : `createCustomerAddress`}(
          ${data.type === "edit" ? `id: ${data.id}` : ``}
          input: {
            firstname: "${data.firstname}"
            lastname:"${data.lastname}"
            street: ["${data.street}"]
            city: "${data.city}"
            ${regionQry}
            country_code: ${data.country_code}
            postcode: "${data.postcode}"
            telephone: "${data.telephone}"
          }
        ) {
            id
            region {
              region
              region_code
            }
            country_code
            street
            telephone
            postcode
            city
            default_shipping
            default_billing
        }
      }`,
  });
  let res = await fetchRequest.executePostFetch(request);
  let profile = false;
  if (res?.data?.createCustomerAddress || res?.data?.updateCustomerAddress) {
    profile = await userprofileRequest.getUserProfile();
  }
  return profile
};

export default addressRequest;
