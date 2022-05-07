import reviewsListingApp from "../controllers/apps/reviewsListingApp";
import UserImg from '../images/user.png';

class ReviewListing extends reviewsListingApp {
    render() {
        return (
            <div className="review-listing-main-container">
                <h3>Customer Reviews</h3>
                <div className="review-listing-block">
                    <div className="pro_review_listing_main_container">
                        {!this.state.loading
                            ?
                            <div className="pro_review_listing_box">
                                {this.state.reviews.map((item, index) => (
                                    <div className="pro_view_review_detail_container" key={"review-" + index}>
                                        <div className="pro_view_review_detail_rating_box">
                                            <div className="common_avg_rating_row">
                                                <div className="common_avg_rating_box">
                                                    <span className="common_avg_rating_counter">{item.average_rating}</span>
                                                    <i className="material-icons">star</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro_view_review_detail_title">
                                            {item.summary}
                                        </div>
                                        <p className="pro_view_review_detail_description">
                                            {item.text}
                                        </p>
                                        <div className="pro_view_review_attr_container">
                                            <span className="pro_view_review_user_img">
                                                <img src={UserImg} />
                                            </span>
                                            <span className="pro_view_review_username">Carol</span>
                                            <span className="pro_view_review_detail_date">
                                                {item.created_at}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {!this.state.endReached &&
                                    <div className="review-load-more">
                                        {!this.state.loadingMore
                                            ? <button type="button" className="load-more-btn" onClick={this.loadMoreReviews}>Load more</button>
                                            : <button type="button" className="load-more-btn">Loading more...</button>
                                        }
                                    </div>
                                }
                            </div>
                            :
                            <div>Loading review...</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewListing;