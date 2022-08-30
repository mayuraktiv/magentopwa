import cartParser from "../lib/cartParser";

const userProfileResponse = {};

userProfileResponse.parse = (data) => {
  let profile = {};
  if (data.customer) {
    profile["userdata"] = { ...data.customer };
  }
  if (data.customerCart) {
    profile["cart_details"] = cartParser.parse(data.customerCart);
  }
  return profile;
};

export default userProfileResponse;
