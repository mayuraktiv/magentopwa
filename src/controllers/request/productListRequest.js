import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";
import productListResponse from "../response/productListResponse";

const productListRequest = {};

productListRequest.fetchProducts = async (data) => {
    console.log("productListRequest.fetchProducts---->", data);
    const request = `{
        commonRequest(path: "${data.path}"){path}
        products(
            ${graphQlQuery.prepareFilterQuery(data)}
            ${graphQlQuery.prepareSortQuery(data)}
            currentPage: ${data.page}
            pageSize: ${data.limit},
        ){
            ${graphQlQuery.productFilters()}
            ${graphQlQuery.pageInfo()}
            ${graphQlQuery.productSortOptions()}
            total_count
            items {
                ${graphQlQuery.product()}
            }
        }
    }`;
    const res = await fetchRequest.executeFetch(request);
    const productData = productListResponse.parse(res);
    return productData
};

export default productListRequest;
