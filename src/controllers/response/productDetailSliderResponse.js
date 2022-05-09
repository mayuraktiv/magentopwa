import productParser from "../lib/productParser";

const productDetailSliderResponse = {};

productDetailSliderResponse.parse = (data) => {
    let productData = false;
    if (data?.data?.products?.items?.length > 0) {
        productData = {};
        const product = data.data.products.items[0];
        productData["sku"] = product.sku;
        productData["related_products"] = productParser.parse(product.related_products);
        productData["crosssell_products"] = productParser.parse(product.crosssell_products);
        productData["upsell_products"] = productParser.parse(product.upsell_products);
    }
    return productData
};

export default productDetailSliderResponse;
