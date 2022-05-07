import React from 'react';
import AddReview from './AddReview';
import ReviewListing from './ReviewListing';

const ProductReviews = (props) => {
    return (
        <div className='products-reviews-main-container'>
            <AddReview 
                sku={props.sku} 
                name={props.name}
            />
            <ReviewListing sku={props.sku} />
        </div>
    )
}

export default ProductReviews;