import React from 'react';
import myOrdersApp from '../controllers/apps/myOrdersApp';
import MainSidebar from '../MyAccount/MainSidebar';
import { CircularProgress } from '@material-ui/core';

export default class Orders extends myOrdersApp {
    render() {
        return (
            <div className='columns frame'>
                <MainSidebar></MainSidebar>
                <div className='column main'>
                    <div className='block-dashboard-orders '>
                        <div className='block-content'>
                            {this.state.loading
                                ?
                                <CircularProgress size={25} color="black" />
                                :
                                <div className="table-wrapper all-orders">
                                    {this.state.orders.length > 0
                                        ?
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
                                                {this.state.orders.map(item => (
                                                    <tr key={`order-${item.order_number}`}>
                                                        <td data-th="Order #" className="col id">{item.order_number}</td>
                                                        <td data-th="Date" className="col date">{item.created_at}</td>
                                                        <td data-th="Order Total" className="col total"><span className="price">${item.grand_total}</span></td>
                                                        <td data-th="Status" className="col status">{item.status}</td>
                                                        <td data-th="Actions" className="col actions">
                                                            <a className="action order">
                                                                <span>Reorder</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        :
                                        <div>No orders found!</div>
                                    }
                                </div>
                            }
                            {/* <a href='#' className='btn btn-secondary btn-bg'>Back</a> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
