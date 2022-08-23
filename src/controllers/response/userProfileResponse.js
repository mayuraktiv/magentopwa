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
  console.log("userProfileResponse->", profile);
  return profile;
};

export default userProfileResponse;
