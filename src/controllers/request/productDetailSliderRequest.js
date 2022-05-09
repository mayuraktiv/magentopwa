import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";
import productDetailSliderResponse from "../response/productDetailSliderResponse";

const productDetailSliderRequest = {};

productDetailSliderRequest.fetchProducts = async (data) => {
    const request = `{
        products(
            filter: {
                sku: { eq: "${data.sku}" }
            }
        ){
            items {
                sku
                related_products { ${graphQlQuery.product()} }
                crosssell_products { ${graphQlQuery.product()} }
                upsell_products { ${graphQlQuery.product()} }
            }
        }
    }`;
    const res = await fetchRequest.executeFetch(request);
    const productData = productDetailSliderResponse.parse(res);
    return productData
};

export default productDetailSliderRequest;
