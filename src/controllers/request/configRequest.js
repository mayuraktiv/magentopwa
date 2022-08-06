import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";
import configResponse from "../response/configResponse";

const configRequest = {};

configRequest.getConfigData = async () => {
    const categryRequest = `{${graphQlQuery.categories()}}`;
    const ratingOptionsRequest = `{${graphQlQuery.ratingOptionsQuery()}}`
    const storeConfigRequest = `{${graphQlQuery.storeConfigQuery()}}`

    const res = await Promise.all([
        fetchRequest.executeFetch(categryRequest),
        fetchRequest.executeFetch(ratingOptionsRequest),
        fetchRequest.executeFetch(storeConfigRequest)
    ]);

    const configData = configResponse.parse(res);
    return configData
};

export default configRequest;