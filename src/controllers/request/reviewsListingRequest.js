import fetchRequest from "../lib/fetchRequest";
import reviewsListingResponse from "../response/reviewsListingResponse";

const reviewsListingRequest = {};

reviewsListingRequest.getReviews = async (data) => {
    const request = `{
        products(
            filter: {
                sku: {
                    eq: "${data.sku}"
                }
            }
        ) {
            items {
                reviews(
                    currentPage: ${data.page}
                    pageSize: ${data.limit}    
                ) {
                    page_info {
                        current_page
                        page_size
                        total_pages
                    }
                    items {
                        average_rating
                        created_at
                        nickname
                        ratings_breakdown {
                            name
                            value
                        }
                        summary
                        text
                    }
                }
            }
        }
    }`;

    let res = await fetchRequest.executeFetch(request);
    const reviewsData = reviewsListingResponse.parse(res);
    return reviewsData;
};

export default reviewsListingRequest;
