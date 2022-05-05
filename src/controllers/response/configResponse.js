const configResponse = {};

configResponse.parse = (data) => {
    const configData = {
        categories: []
    }
    if(data?.data?.categories?.items?.length > 0) {
        configData['categories'] = data.data.categories.items[0].children;
    }
    return configData;
};

export default configResponse;
