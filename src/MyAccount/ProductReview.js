import React, { Component } from 'react';
import MainSidebar from '../MyAccount/MainSidebar';


export default class ProductReview extends Component {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                <div className='column main'>
                    <div className='reviews'>
                        <div className='table-wrapper table-reviews'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th className="col date">Created</th>
                                        <th className="col item">Product Name</th>
                                        <th className="col summary">Rating</th>
                                        <th className="col description">Review</th>
                                        <th className="col description">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-th="Created" className="col date">6/1/22</td>
                                        <td data-th="Product Name" className="col item">
                                            <strong class="product-name">
                                                <a href="#">Wholesale Fashion Handbags</a>
                                            </strong>
                                        </td>
                                        <td data-th="Rating" className="col summary">
                                            <div className='rating-summary'>
                                                <div class="control starrating d-inline-flex flex-row-reverse justify-content-center">
                                                    <input type="radio" id="star5" name="rating" value="5" />
                                                    <label for="star5" title="5 star"></label>
                                                    <input type="radio" id="star4" name="rating" value="4" />
                                                    <label for="star4" title="4 star"></label>
                                                    <input type="radio" id="star3" name="rating" value="3" />
                                                    <label for="star3" title="3 star"></label>
                                                    <input type="radio" id="star2" name="rating" value="2" />
                                                    <label for="star2" title="2 star"></label>
                                                    <input type="radio" id="star1" name="rating" value="1" />
                                                    <label for="star1" title="1 star"></label>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Review" className="col description"> Good Product</td>
                                        <td data-th="Actions" className="col actions">
                                            <a href="#" className="action more">
                                                <span>See Details</span>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a href='#' className='btn btn-secondary btn-bg'>Back</a>
                    </div>
                </div>
            </div>
        );
    }
}
