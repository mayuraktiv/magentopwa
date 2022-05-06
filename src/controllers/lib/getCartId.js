const getCartId = () => {
    let cart_id = false;
    let storedCartId = localStorage.getItem("cart_id");
    if (storedCartId?.length > 0) {
        cart_id = storedCartId;
    }
    return cart_id;
}

export default getCartId;