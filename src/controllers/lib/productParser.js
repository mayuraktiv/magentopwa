const productParser = {};

productParser.parse = (items) => {
    let products = [];
    let product_skus = [];
    if (items?.length > 0) {
        for (let i = 0; i < items.length; i++) {
            let product = items[i];
            let price_range = items[i].price_range;
            product_skus.push(product.sku);
            product["prices"] = {
                discount_amount: price_range.minimum_price.discount.amount_off,
                discount_percent: price_range.minimum_price.discount.percent_off,
                price: price_range.minimum_price.regular_price.value,
                special_price: price_range.minimum_price.final_price.value,
            }
            product["media_gallery"] = {
                images: items[i].media_gallery,
                thumbnail: items[i].image
            }
            product["rating_summary"] = {
                count: items[i].review_count,
                averageRating: Math.round(items[i].rating_summary * 5 / 100)
            }
            product["description"] = items[i].description?.html?.length > 0 ? items[i].description.html : null;
            product["short_description"] = items[i].short_description?.html?.length > 0 ? items[i].short_description.html : null;
            product["product_id"] = window.atob(items[i].uid);
            products.push(product);
        }
    }
    return { products, product_skus };
}

export default productParser;