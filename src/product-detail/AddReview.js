import { Fragment } from "react";
import { connect } from "react-redux";
import addReviewApp from "../controllers/apps/addReviewApp";

class AddReview extends addReviewApp {
    render() {
        return (
            <div className="product-review">
                <div className="review-title">
                    <span>You're reviewing:</span>
                    <strong dangerouslySetInnerHTML={{ __html: this.props.name }}></strong>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    {this.props.rating_options?.map(rating => (
                        <div className="field review-field-ratings" key={"rating-" + rating.id}>
                            <label className="label">
                                <span>{rating.name}</span>
                            </label>
                            <div className="control starrating d-flex flex-row-reverse justify-content-end">
                                {rating.values?.sort((n1, n2) => n2.value - n1.value).map((option, index) => (
                                    <Fragment key={`star${option.value}`}>
                                        <input
                                            type="radio"
                                            name={rating.id}
                                            value={option.value_id}
                                            id={`star${option.value}`}
                                            onChange={this.valueChangeHandler}
                                        />
                                        <label htmlFor={`star${option.value}`} title={`${option.value} star`}></label>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="review-form">
                        <div className="row">
                            <div className="col-6 col-mb-12">
                                <div className="field review-field-name required">
                                    <label className="label"><span>Name</span></label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            name="nickname"
                                            id="name_field"
                                            className="input-text"
                                            value={this.state.form.nickname}
                                            onChange={this.valueChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="field review-field-summary required">
                                    <label className="label"><span>Summary</span></label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            name="summary"
                                            id="summary_field"
                                            className="input-text"
                                            value={this.state.form.summary}
                                            onChange={this.valueChangeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-mb-12">
                                <div className="field review-field-text required">
                                    <label className="label"><span>Review</span></label>
                                    <div className="control">
                                        <textarea
                                            name="text"
                                            id="review_field"
                                            cols="5"
                                            rows="3"
                                            value={this.state.form.text}
                                            onChange={this.valueChangeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action-primary">
                        {!this.state.loading
                            ? <button className="btn btn-default" type="submit"><span>Submit Review</span></button>
                            : <button className="btn btn-default" type="button"><span>Please wait...</span></button>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(addReviewApp.mapStateToProps)(AddReview);