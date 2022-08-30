const urlResolverResponse = {};

urlResolverResponse.parse = (data) => {
    let urlInfo = {};
    if(data?.data?.urlResolver) {
        urlInfo = { ...data.data.urlResolver }
        if(urlInfo.type === "CATEGORY") {
            urlInfo["page_type"] = "CATEGORY";
            urlInfo["uid"] = urlInfo.entity_uid;
        }
        else if(urlInfo.type === "CMS_PAGE") {
            urlInfo["page_type"] = "CMS";
            urlInfo["page_id"] = urlInfo.entity_uid;
        }
        else if(urlInfo.type === "PRODUCT") {
            urlInfo["page_type"] = "PRODUCT";
            urlInfo["url_key"] = urlInfo.relative_url.split('.html')[0];
        }
    }
    else {
        urlInfo["page_type"] = "ERROR";
    }
    return urlInfo
};

export default urlResolverResponse;
