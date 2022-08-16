const configResponse = {};
configResponse.getCategories = (allCategories, parent_uid) => {
    const categories = [];
    for (let i = 0; i < allCategories.length; i++) {
        const category = { ...allCategories[i] };
        category['category_id'] = parseInt(window.atob(category.uid));
        category['parent_id'] = parseInt(window.atob(category.parent_uid))
        if (category.parent_uid === parent_uid) {
            if (category.children_count > 0) {
                category["childs"] = configResponse.getCategories(allCategories, category.uid);
            }
            else {
                category["childs"] = [];
            }
            categories.push(category);
        }
    }
    return categories;
};

configResponse.parse = (res) => {
  const configData = {
    categories: [],
    storeConfig: {},
    rating_options: [],
    countries: []
  };
  const [allCategories, ratingOptions, storeConfig, countries] = res;

  if (ratingOptions?.data?.productReviewRatingsMetadata?.items?.length > 0) {
    configData["rating_options"] =
      ratingOptions.data.productReviewRatingsMetadata.items;
  }

  if (storeConfig?.data?.storeConfig?.store_name?.length > 0) {
    configData.storeConfig = storeConfig.data.storeConfig;
    if (allCategories?.data?.allCategories?.list?.length > 0) {
      configData["categories"] = configResponse.getCategories(
        allCategories.data.allCategories.list,
        storeConfig.data.storeConfig.root_category_uid
      );
    }
  }

  if(countries?.data?.countries?.length > 0) {
    configData.countries = countries.data.countries;
  }
  return configData;
};

export default configResponse;