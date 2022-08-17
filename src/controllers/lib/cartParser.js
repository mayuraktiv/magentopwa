const cartParser = {};

cartParser.parse = (cart) => {
  const cartData = {
    ...cart,
    shipping_adress: cart.shipping_addresses ? cart.shipping_addresses[0] : {},
  };
  delete cartData['shipping_addresses'];
  return cartData;
};

export default cartParser;
