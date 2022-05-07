const reviewsListingResponse = {};

reviewsListingResponse.parse = (data) => {
    const reviewsData = {
        reviews: [],
        page_info: {
            current_page: 1,
            page_size: 5,
            total_pages: 1
        }
    }
    if (data?.data?.products?.items?.length > 0 && data.data.products.items[0].reviews?.items?.length > 0) {
        reviewsData['page_info'] = data.data.products.items[0].reviews.page_info;
        let reviews = [];
        for (let i = 0; i < data.data.products.items[0].reviews.items.length; i++) {
            const review =  { ...data.data.products.items[0].reviews.items[i] };
            review["average_rating"] = Math.round(data.data.products.items[0].reviews.items[i].average_rating * 5 / 100);
            reviews.push(review);
        }
        reviewsData["reviews"] = reviews;
    }
    return reviewsData;
};

export default reviewsListingResponse;