import productParser from "../lib/productParser";

const productListResponse = {};

productListResponse.parse = (data) => {
    let productData = {
        products: [],
        filters: [],
        sort_fields: [],
        total_count: 0,
        product_skus: [],
        page_info: {
            current_page: 1,
            page_size: 20,
            total_pages: 0
        }
    };
    if (data?.data?.products) {
        const productListingData = productParser.parse(data.data.products.items);
        productData.filters = data.data.products.aggregations;
        productData.page_info = data.data.products.page_info;
        productData.products = productListingData.products;
        productData.product_skus = productListingData.product_skus;
        productData.total_count = data.data.products.total_count;
        productData.sort_fields = data.data.products.sort_fields
    }
    if(data?.data?.commonRequest) {
        productData.path = data.data.commonRequest.path
    }
    return productData
};

export default productListResponse;
