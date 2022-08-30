import { Fragment } from "react";
import myOrdersApp from "../controllers/apps/myOrdersApp";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from "react-router-dom";

class ProfileOrders extends myOrdersApp {
    render() {
        return (
            <Fragment>
                <div className="block-dashboard-orders">
                    <div className="block-title-Account">
                        <h5>Recent Orders</h5>
                    </div>
                    <div className="block-content">
                        {this.state.loading
                            ?
                            <CircularProgress size={25} color="black" />
                            :
                            <div className="table-wrapper orders-recent">
                                {this.state.orders.length > 0
                                    ?
                                    <table className="table table-order-items">
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
                                            {this.state.orders.map(item => (
                                                <tr>
                                                    <td data-th="Order #" className="col id">
                                                        {item.order_number}
                                                    </td>
                                                    <td data-th="Date" className="col date">
                                                        {item.created_at}
                                                    </td>
                                                    <td data-th="Ship To" className="col shipping">
                                                        {item.shipping_address.firstname} {item.shipping_address.lastname}
                                                    </td>
                                                    <td data-th="Order Total" className="col total">
                                                        <span className="price">${item.grand_total}</span>
                                                    </td>
                                                    <td data-th="Status" className="col status">
                                                        {item.status}
                                                    </td>
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
                        {this.state.orders.length > 0 &&
                            <Link to='/sales/order/history/' className="btn btn-secondary btn-xs btn-bg view">
                                View All
                            </Link>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProfileOrders;