import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";
import configResponse from "../response/configResponse";

const configRequest = {};

configRequest.getConfigData = async () => {
    const categryRequest = `{
        ${graphQlQuery.categories()}
    }`;

    let res = await fetchRequest.executeFetch(categryRequest);
    let configData = configResponse.parse(res);
    console.log("categories---->", configData);
    return configData
};

export default configRequest;
