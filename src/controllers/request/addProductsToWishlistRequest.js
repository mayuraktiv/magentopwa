import fetchRequest from "../lib/fetchRequest";
import getCartId from "../lib/getCartId";
import graphQlQuery from "../lib/graphQlQuery";

const addProductsToWishlistRequest = {};

addProductsToWishlistRequest.addProductsToWishlist = async (data) => {
  console.log("123 => ", data);
  const request = JSON.stringify({
    query: `mutation {
        addWishlistItemsToCart (
          wishlistId: ${graphQlQuery.wishlists()}
          wishlistItemIds: [${data.itemId}]
        )
        {
          wishlist {
            id
            items_count
            items_v2 (currentPage: 1, pageSize: 8 ) {
              items {
                id
                quantity
                ... on BundleWishlistItem {
                  bundle_options {
                    values {
                      id
                      label
                      quantity
                    }
                  }
                }
                product {
                  uid
                  name
                  sku
                  price_range {
                    minimum_price {
                      regular_price {
                        currency
                        value
                      }
                    }
                    maximum_price {
                      regular_price {
                        currency
                        value
                      }
                    }
                  }
                }
              }
            }
          }
          user_errors {
            code
            message
          }
        }
         
    }   
    `,
  });
  const res = await fetchRequest.executePostFetch(request);
  console.log(
    "===================================================================================="
  );
  console.log("res ==> ", res);
  console.log(
    "===================================================================================="
  );
  return res;
};
export default addProductsToWishlistRequest;
