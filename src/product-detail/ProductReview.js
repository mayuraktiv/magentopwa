import React from 'react';

export default function ProductReview() {
    return (
        <div className="product-review">
            <div className="review-title"><span>You're reviewing:</span><strong>Analogue Resin Strap Watch</strong></div>
            <form>
                <div className="field review-field-ratings">
                    <label className="label"><span>Quality</span></label>
                    <div className="control starrating d-flex flex-row-reverse justify-content-end">
                        <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star"></label>
                    </div>
                </div>
                <div className="review-form">
                    <div className="row">
                        <div className="col-6 col-mb-12">
                            <div className="field review-field-name required">
                                <label className="label"><span>Name</span></label>
                                <div className="control">
                                    <input type="text" name="name" id="name_field" className="input-text" />
                                </div>
                            </div>
                            <div className="field review-field-summary required">
                                <label className="label"><span>Summary</span></label>
                                <div className="control">
                                    <input type="text" name="summary" id="summary_field" className="input-text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-mb-12">
                            <div className="field review-field-text required">
                                <label className="label"><span>Review</span></label>
                                <div className="control">
                                    <textarea name="detail" id="review_field" cols="5" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action-primary">
                    <button className="btn btn-default" type="submit"><span>Submit Review</span></button>
                </div>
            </form>
        </div>
    )
}
