const configResponse = {};
configResponse.getCategories = (allCategories, parent_uid) => {
  // const categories = allCategories.filter(category => category.parent_uid === parent_uid);
  const childs = [];

  for (let i = 0; i < allCategories.length; i++) {
    const category = { ...allCategories[i] };
    if (category.parent_uid === parent_uid) {
      if (category.children_count > 0) {
        const childs = configResponse.getCategories(allCategories, parent_uid);
        console.log("childs",childs)
      }
      category["childs"] = childs;
      // categories.push(category);
    }
  }
  // console.log("categories---->", categories);
  // return categories;
};

configResponse.parse = (res) => {
  const configData = {
    categories: [],
    storeConfig: {},
    rating_options: [],
  };
  const [allCategories, ratingOptions, storeConfig] = res;

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

  return configData;
};

export default configResponse;
