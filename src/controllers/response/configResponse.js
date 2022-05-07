const configResponse = {};

configResponse.parse = (res) => {
    const configData = {
        categories: [],
        rating_options: []
    }
    if (res?.length > 0) {
        for (let i = 0; i < res.length; i++) {
            const data = res[i];
            if (data?.data?.categories?.items?.length > 0) {
                configData['categories'] = data.data.categories.items[0].children;
            }
            if (data?.data?.productReviewRatingsMetadata?.items?.length > 0) {
                configData["rating_options"] = data.data.productReviewRatingsMetadata.items
            }
        }
    }
    return configData;
};

export default configResponse;
