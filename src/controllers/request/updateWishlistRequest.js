import fetchRequest from "../lib/fetchRequest";

const updateWishlistRequest = {};

updateWishlistRequest.updateWishlistItems = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        updateWishlist(
          wishlistUid: ID!
          name: String
          visibility: WishlistVisibilityEnum
        ) {
          UpdateWishlistOutput
        }
      }            
    `,
  });

  const res = await fetchRequest.executePostFetch(request);
  return res;
};
export default updateWishlistRequest;
