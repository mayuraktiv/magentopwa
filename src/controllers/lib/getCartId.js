import localStorageKeys from "../constants/localStorageKeys";

const getCartId = () => {
    let cart_id = false;
    let storedCartId = localStorage.getItem(localStorageKeys.CART_ID);
    if (storedCartId?.length > 0) {
        cart_id = storedCartId;
    }
    return cart_id;
}

export default getCartId;