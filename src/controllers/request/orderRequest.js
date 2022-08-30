import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";

const orderRequest = {};

orderRequest.getOrderDetails = async () => {
const request = JSON.stringify({
query: `{
    customerOrders {
        items {
          order_number
          id
          created_at
          grand_total
          status
        }
      }
  customerCart {
    ${graphQlQuery.cart()}
  }
}
`,
});
const res = await fetchRequest.executePostFetch(request);
console.log("object",res)
//   let profile = false;
//   if (res?.data) {
//     profile = userProfileResponse.parse(res.data);
//   }
return res;
};

export default orderRequest;