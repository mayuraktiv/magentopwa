import React, { Component } from 'react';
import MainSidebar from '../MyAccount/MainSidebar';


export default class Orders extends Component {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                <div className='column main'>
                    <div className='block-dashboard-orders '>
                        <div className='block-content'>
                            <div className='table-wrapper all-orders'>
                                <table className='table table-order-items'>
                                    <thead>
                                        <tr>
                                            <th className="col id">Order #</th>
                                            <th className="col date">Date</th>
                                            <th className="col total">Order Total</th>
                                            <th className="col status">Status</th>
                                            <th className="col actions">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-th="Order #" className="col id">7000000007</td>
                                            <td data-th="Date" className="col date">6/1/22</td>
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
                                        <tr>
                                            <td data-th="Order #" className="col id">7000000007</td>
                                            <td data-th="Date" className="col date">6/1/22</td>
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
                            <a href='#' className='btn btn-secondary btn-bg'>Back</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
