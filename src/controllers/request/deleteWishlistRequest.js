import fetchRequest from "../lib/fetchRequest";

const deleteWishlistRequest = {};

deleteWishlistRequest.deleteWishlistItems  = async (data) => {
  const request = JSON.stringify({
    query: `mutation {
        deleteWishlist(wishlistId: ID!): DeleteWishlistOutput
      }
         
    `,
  });

  const res = await fetchRequest.executePostFetch(request);
  return res;
};
export default deleteWishlistRequest;
