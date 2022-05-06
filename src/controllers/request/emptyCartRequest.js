import fetchRequest from "../lib/fetchRequest";

const emptyCartRequest = {};

emptyCartRequest.createEmptyCart = async () => {
    const request = JSON.stringify({
        query: `mutation { createEmptyCart }`
    });

    let res = await fetchRequest.executePostFetch(request);
    if(res?.data?.createEmptyCart) {
        localStorage.setItem("cart_id", res.data.createEmptyCart);
    }
    return res
};

export default emptyCartRequest;
