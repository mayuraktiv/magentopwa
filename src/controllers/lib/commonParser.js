const commonParser = {};

commonParser.categoryLink = (path) => {
    return "/"+path+".html";
}

commonParser.cmsLink = (path) => {
    return "/"+path+".html";
}

commonParser.productLink = (path) => {
    return "/"+path+".html";
}

commonParser.entityId = (entity_uid) => {
    return window.atob(entity_uid);
}

commonParser.decode = (id) => {
    return window.atob(id);
}

commonParser.encode = (id) => {
    return window.btoa(id);
}

export default commonParser;