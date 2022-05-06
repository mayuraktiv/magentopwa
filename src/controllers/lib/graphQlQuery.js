import commonParser from './commonParser';
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
}

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
}

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
}

graphQlQuery.pageInfo = () => {
    return `
        page_info {
            current_page
            page_size
            total_pages
        }
    `;
}

graphQlQuery.categories = () => {
    return `
        categories {
            items {
                children_count
                name
                url_key
                url_path
                image
                uid
                description
                meta_title
                meta_keywords
                meta_description
                children {
                    children_count
                    name
                    url_key
                    url_path
                    image
                    uid
                    description
                    meta_title
                    meta_keywords
                    meta_description
                }
            }
        }
    `;
}

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
}

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
}

graphQlQuery.prepareFilterQuery = (data) => {
    let query = `filter: {
        ${graphQlQuery.prepareCategryFilter(data)}
        ${Object.keys(data.appliedFilters).filter(item => item !== "price" && item !== "q" && item !== "product_list_order").map(key => `${key}: { eq: "${data.appliedFilters[key]}" }`)}
        ${graphQlQuery.preparePriceFilter(data)}
    }`;
    return query;
}

graphQlQuery.prepareSortQuery = (data) => {
    let query = ``;
    if ('product_list_order' in data.appliedFilters) {
        query = `sort:{${data.appliedFilters['product_list_order']}: ASC}`
    }
    return query;
}

graphQlQuery.prepareSearchQuery = (data) => {
    let query = ``;
    if (data.page_type === "SEARCH" && 'q' in data.appliedFilters) {
        query = `search: "${data.appliedFilters['q']}`;
    }
    return query
}

graphQlQuery.prepareCategryFilter = (data) => {
    let query = ``;
    if (data.page_type === "CATEGORY" && !('category_id' in data.appliedFilters)) {
        query = `category_id: { eq: "${commonParser.decode(data.uid)}"}`;
    }
    return query;
}

graphQlQuery.preparePriceFilter = (data) => {
    let query = ``;
    if ('price' in data.appliedFilters) {
        let prices = data.appliedFilters['price'].split('_');
        query = `price:{from: "${prices[0]}" to: "${prices[1]}"}`
    }
    return query;
}

export default graphQlQuery;