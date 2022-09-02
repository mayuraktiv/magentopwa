import commonParser from "./commonParser";
const graphQlQuery = {};

graphQlQuery.product = () => {
  return `
        name
        description {
        html
        }
        short_description {
        html
        }
        meta_title
        meta_keyword
        meta_description
        image {
        disabled
        label
        position
        url
        }
        media_gallery {
        disabled
        label
        position
        url
        }
        sku
        stock_status
        rating_summary
        review_count
        url_key
        uid
        price_range {
        minimum_price {
            discount {
            amount_off
            percent_off
            }
            final_price {
            currency
            value
            }
            regular_price {
            currency
            value
            }
        }
        }
    `;
};

graphQlQuery.productFilters = () => {
  return `
        aggregations {
            attribute_code
            count
            label
            options {
                count
                label
                value
            }
        }
    `;
};

graphQlQuery.productSortOptions = () => {
  return `
        sort_fields {
            default
            options{
                label
                value
            }
        }
    `;
};

graphQlQuery.pageInfo = () => {
  return `
        page_info {
            current_page
            page_size
            total_pages
        }
    `;
};

graphQlQuery.categories = () => {
  return `
    allCategories {
      list {
        children_count
        position
        description
        image
        meta_description
        meta_keywords
        meta_title
        name
        parent_uid
        uid
        url_key
        url_path
      } 
    }
  `;
};

graphQlQuery.cart = () => {
  let query = `
        email
        id
        is_virtual
        total_quantity
        ${graphQlQuery.shippingAddressQuery()}
        ${graphQlQuery.billingAddressQuery()}
        items {
            quantity
            uid
            prices {
                price {
                  currency
                  value
                }
                row_total {
                  currency
                  value
                }
                row_total_including_tax {
                  currency
                  value
                }
            }
            product {
                ${graphQlQuery.product()}
            }
        }
        available_payment_methods {
            code
            title
        }
        selected_payment_method {
            code
            title
        }
        applied_coupons {
            code
        }
        prices {
            applied_taxes {
                amount {
                    currency
                    value
                }
                label
            }
            discounts {
                amount {
                    currency
                    value
                }
                label
            }
            grand_total {
                currency
                value
            }
            subtotal_excluding_tax {
                currency
                value
            }
            subtotal_including_tax {
                currency
                value
            }
            subtotal_with_discount_excluding_tax {
                currency
                value
            }
        }
    `;
  return query;
};

graphQlQuery.billingAddressQuery = () => {
  return `
        billing_address {
            firstname
            lastname
            street
            telephone
            city
            country {
                code
                label
            }
            postcode
            region {
                code
                label
            }
        }
    `;
};
graphQlQuery.wishlists = () =>{
  return `
  customer {
    wishlists {
      id
       items_count
      items_v2 {
        items {
          id
          product {
            uid
            name
            sku
          }
        }
      }
    }
  }
  `
}

graphQlQuery.shippingAddressQuery = () => {
  return `
        shipping_addresses {
            firstname
            lastname
            street
            city
            region {
                code
                label
            }
            country {
                code
                label
            }
            telephone
            postcode
            available_shipping_methods {
                amount {
                    currency
                    value
                }
                available
                carrier_code
                carrier_title
                error_message
                method_code
                method_title
                price_excl_tax {
                    value
                    currency
                }
                price_incl_tax {
                    value
                    currency
                }
            }
            selected_shipping_method {
                amount {
                    value
                    currency
                }
                carrier_code
                carrier_title
                method_code
                method_title
            }
        }
    `;
};

graphQlQuery.ratingOptionsQuery = () => {
  return `
        productReviewRatingsMetadata {
            items {
                id
                name
                values {
                    value_id
                    value
                }
            }
        }
    `;
};

graphQlQuery.storeConfigQuery = () => {
  return `
        storeConfig{
            store_code
            website_name
            secure_base_url
            base_url
            store_name
            root_category_uid
        }
      `;
};

graphQlQuery.countries = () => {
  return `
    countries {
      regions:available_regions {
        code
        id
        name
      }
      name:full_name_english
      id
    } 
  `;
};


graphQlQuery.prepareRatingOptionQuery = (data) => {
  return `${Object.keys(data)
    .filter(
      (key) =>
        key !== "sku" &&
        key !== "nickname" &&
        key !== "summary" &&
        key !== "text"
    )
    .map((item) => `{id: "${item}", value_id: "${data[item]}"}`)}`;
};

graphQlQuery.prepareFilterQuery = (data) => {
  let query = `filter: {
        ${graphQlQuery.prepareCategryFilter(data)}
        ${Object.keys(data.appliedFilters)
      .filter(
        (item) =>
          item !== "price" && item !== "q" && item !== "product_list_order"
      )
      .map((key) => `${key}: { eq: "${data.appliedFilters[key]}" }`)}
        ${graphQlQuery.preparePriceFilter(data)}
    }`;
  return query;
};

graphQlQuery.prepareSortQuery = (data) => {
  let query = ``;
  if ("product_list_order" in data.appliedFilters) {
    query = `sort:{${data.appliedFilters["product_list_order"]}: DESC}`;
  }
  return query;
};

graphQlQuery.prepareSearchQuery = (data) => {
  let query = ``;
  if (data.page_type === "SEARCH" && "q" in data.appliedFilters) {
    query = `search: "${data.appliedFilters["q"]}`;
  }
  return query;
};

graphQlQuery.prepareCategryFilter = (data) => {
  let query = ``;
  if (
    data.page_type === "CATEGORY" &&
    !("category_id" in data.appliedFilters)
  ) {
    query = `category_id: { eq: "${commonParser.decode(data.uid)}"}`;
  }
  return query;
};

graphQlQuery.preparePriceFilter = (data) => {
  let query = ``;
  if ("price" in data.appliedFilters) {
    let prices = data.appliedFilters["price"].split("_");
    query = `price:{from: "${prices[0]}" to: "${prices[1]}"}`;
  }
  return query;
};

export default graphQlQuery;
