import { Component } from "react";
import reviewsListingRequest from "../request/reviewsListingRequest";

class reviewsListingApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            loading: true,
            page: 1,
            limit: 5,
            loadingMore: false,
            endReached: false
        }
        this.fetchReviews = this.fetchReviews.bind(this);
    }

    componentDidMount = () => {
        this.fetchReviews();
    }

    loadMoreReviews = () => {
        const page = this.state.page + 1;
        this.setState({
            page: page,
            loadingMore: true
        }, () => {
            this.fetchReviews();
        });
    }

    fetchReviews = async () => {
        const data = {
            sku: this.props.sku,
            page: this.state.page,
            limit: this.state.limit
        }
        const reviewsData = await reviewsListingRequest.getReviews(data);
        this.setState({
            loading: false,
            loadingMore: false,
            reviews: [...this.state.reviews, ...reviewsData.reviews],
            endReached: reviewsData.page_info.current_page === reviewsData.page_info.total_pages
        });
    }
}

export default reviewsListingApp;