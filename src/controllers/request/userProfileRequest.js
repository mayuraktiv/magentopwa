import fetchRequest from "../lib/fetchRequest";

const userprofileRequest = {};

userprofileRequest.fetchUserProfile = async () => {
  const request =  ` query: { 
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
                  wishlists {
                    id
                    name
                    items_count
                    items_v2 {
                      items {
                        id
                        product {
                          uid
                          name
                          sku
                        }
                      }
                    }
                  }
                }
                
            }`;

  const res = await fetchRequest.executePostFetch(request);
  return res;
};

export default userprofileRequest;
