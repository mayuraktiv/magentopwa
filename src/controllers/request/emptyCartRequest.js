import localStorageKeys from "../constants/localStorageKeys";
import fetchRequest from "../lib/fetchRequest";

const emptyCartRequest = {};

emptyCartRequest.createEmptyCart = async () => {
    const request = JSON.stringify({
        query: `mutation { createEmptyCart }`
    });

    let res = await fetchRequest.executePostFetch(request);
    if(res?.data?.createEmptyCart) {
        localStorage.setItem(localStorageKeys.CART_ID, res.data.createEmptyCart);
    }
    return res
};

export default emptyCartRequest;
