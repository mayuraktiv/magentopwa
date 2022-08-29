import fetchRequest from "../lib/fetchRequest";

const myOrdersRequest = {};

myOrdersRequest.getOrders = async () => {
  const request = JSON.stringify({
    query: `{
      customer{
        orders {
          items {
            order_number
            id
            created_at
            grand_total
            status
            shipping_address {
              firstname
              lastname
            }
          }
        }
      }
    }
    `,
  });
  const res = await fetchRequest.executePostFetch(request);
  let orders = [];
  if (res?.data?.customer?.orders?.items?.length > 0) {
    orders = res.data.customer.orders.items;
  }
  return orders;
};

export default myOrdersRequest;
