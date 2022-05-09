import actionTypes from "../actions/actionTypes";

let initialState = {
    userdata: null,
    user_status: false,
    cart_details: null,
    categories: [],
    cms_pages: [],
    products: [],
    history: [],
    categoryProducts: [],
    searchProducts: [],
    rating_options: [],
    productDetailSlider: []
};

const rootReducer = (state = initialState, storeData) => {
    let action = storeData.type;
    let node = storeData.node;
    let data = storeData.data;
    switch (action) {
        case actionTypes.REPLACE:
            if (typeof node === "object") {
                Object.keys(node).forEach(key => {
                    state[key] = data[key];
                })
            }
            else {
                state[node] = data;
            }
            return {
                ...state
            };
        case actionTypes.ADD:
            return {
                ...state
            };
        case actionTypes.MERGE:
            if (typeof node === "object") {
                Object.keys(node).forEach(key => {
                    if (key === "history") {
                        state[key] = storeHistoryData(state, key, data[key]);
                    }
                    else if (key === "products") {
                        state[key] = storeProducts(state, key, data[key]);
                    }
                    else if (key === "productDetailSlider") {
                        state[key] = storeProductDetailSliderData(state, key, data[key]);
                    }
                    else {
                        state[key] = data[key];
                    }
                })
            }
            else {
                state[node] = data;
            }
            return {
                ...state
            };
        case actionTypes.DELETE:
            return {
                ...state
            };
        default:
            return state
    }
}

const storeHistoryData = (state, node, data) => {
    let history = state[node];
    let index = history.findIndex(item => item.path === data.path);
    if (index !== -1) {
        history[index] = data;
    }
    else {
        history.push(data);
    }
    return history;
}

const storeProducts = (state, node, data) => {
    let products = state[node];
    for (let i = 0; i < data.length; i++) {
        let productData = data[i]
        let index = products.findIndex(item => item.sku === productData.sku);
        if (index !== -1) {
            products[index] = productData;
        }
        else {
            products.push(productData);
        }
    }
    return products;
}

const storeProductDetailSliderData = (state, node, data) => {
    let productDetailSlider = state[node];
    let index = productDetailSlider.findIndex(item => item.sku === data.sku);
    if (index !== -1) {
        productDetailSlider[index] = data;
    }
    else {
        productDetailSlider.push(data);
    }
    return productDetailSlider;
}

export default rootReducer;