import fetchRequest from "../lib/fetchRequest";
import urlResolverResponse from "../response/urlResolverResponse";

const urlResolverRequest = {};

urlResolverRequest.getUrlInfo = async (data) => {
    const request = `{
        urlResolver(url: "${data.url}") {
            entity_uid
            relative_url
            redirectCode
            type 
        }
    }`;

    let res = await fetchRequest.executeFetch(request);
    let urlInfo = urlResolverResponse.parse(res);
    return urlInfo
};

export default urlResolverRequest;
