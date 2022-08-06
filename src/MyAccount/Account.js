import React, { Component } from 'react';
import MainSidebar from '../MyAccount/MainSidebar';


export default class Account extends Component {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                <div className='column main'>
                    <div className='block-dashboard-info'>
                        <div className='box-information'>
                            <div className='block-title-account'><h5>Contact Information</h5></div>
                            <div className='box-content'>
                                <p>test test<br></br>test06562@gmail.com</p>
                            </div>
                            <div className='box-action'>
                                <a href="#" className='change-password btn btn-secondary btn-xs'>Change Password</a>
                                <a href="#" className='edit btn btn-default btn-bg btn-xs'>Edit</a>
                            </div>
                        </div>
                        <div className='box-newsletter'>
                            <div className='block-title-account'><h5>NEWSLETTERS</h5></div>
                            <div className='box-content'>
                                <p>You aren't subscribed to our newsletter.</p>
                            </div>
                            <div className='box-action'>
                                <a href="#" className='edit btn btn-default btn-bg btn-xs'>Edit</a>
                            </div>
                        </div>
                    </div>
                    <div className='block-dashboard-addresses'>
                        <div className='block-title-account'><h5>Address Book</h5></div>
                        <div className='block-content'>
                            <div className='box-billing-address'>
                                <h6>Default Billing Address</h6>
                                {/* <p>You have not set a default billing address.</p> */}
                                <address>test test<br></br>test<br></br>28 S High St<br></br>West Chester,  Pennsylvania, 19382<br></br>United States<br></br>T: 1234567891</address>
                                <div className='box-action'>
                                    <a href="#" className='edit-address btn btn-secondary btn-xs'>Edit Address</a>
                                    <a href="#" className='btn btn-default btn-bg'>Manage Addresses</a>
                                </div>
                            </div>
                            <div className='box-shipping-address'>
                            <h6>Default Shipping Address</h6>
                                {/* <p>You have not set a default Shipping address.</p> */}
                                <address>test test<br></br>test<br></br>28 S High St<br></br>West Chester,  Pennsylvania, 19382<br></br>United States<br></br>T: 1234567891</address>
                                <div className='box-action'>
                                    <a href="#" className='edit-address btn btn-secondary btn-xs'>Edit Address</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' block-reviews-dashboard'>
                        <div className='block-title'><h4>My Recent Reviews</h4><a className='action view'><span>View All</span></a></div>
                        <div className='block-content'>
                            <ul className='items'>
                                <li className='item'>
                                    <strong className='product-name'>
                                        <a href='#'>Wholesale Fashion Handbags</a>
                                    </strong>
                                    <div className='rating-summary'>
                                        <span className='label'>Rating:</span>
                                        <div class="control starrating d-flex flex-row-reverse justify-content-end">
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
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='block-dashboard-orders'>
                        <div className='block-title-account'><h5>Recent Orders</h5></div>
                        <div className='block-content'>
                            <div className='table-wrapper orders-recent'>
                                <table className='table table-order-items'>
                                    <thead>
                                        <tr>
                                            <th className="col id">Order #</th>
                                            <th className="col date">Date</th>
                                            <th className="col shipping">Ship To</th>
                                            <th className="col total">Order Total</th>
                                            <th className="col status">Status</th>
                                            <th className="col actions">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-th="Order #" className="col id">7000000007</td>
                                            <td data-th="Date" className="col date">6/1/22</td>
                                            <td data-th="Ship To" className="col shipping">test test</td>
                                            <td data-th="Order Total" className="col total"><span className="price">$559.00</span></td>
                                            <td data-th="Status" className="col status">Pending</td>
                                            <td data-th="Actions" className="col actions">
                                                <a href="#" className="action view">
                                                    <span>View Order</span>
                                                </a>
                                                <a href="#" className="action order">
                                                    <span>Reorder</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="#" className='btn btn-secondary btn-xs btn-bg view'>View All</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
