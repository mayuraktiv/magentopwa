import fetchRequest from "../lib/fetchRequest";
import graphQlQuery from "../lib/graphQlQuery";

const addReviewRequest = {};

addReviewRequest.createReview = async (data) => {
    const request = JSON.stringify({
        query: `mutation { 
            createProductReview(
                input: {
                    sku: "${data.sku}"
                    nickname: "${data.nickname}"
                    summary: "${data.summary}"
                    text: "${data.text}"
                    ratings: [${graphQlQuery.prepareRatingOptionQuery(data)}]
                }
            ) {
                review {
                    nickname
                    summary
                    text
                    average_rating
                    ratings_breakdown {
                        name
                        value
                    }
                }
            }
        }`
    });
    let res = await fetchRequest.executePostFetch(request);
    return res
};

export default addReviewRequest;
