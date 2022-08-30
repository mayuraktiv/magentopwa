import { Component } from "react";
import myOrdersRequest from "../request/myOrdersRequest";

class myOrdersApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true
        }
    }

    componentDidMount = () => {
        this.getOrders();
    }

    getOrders = async () => {
        const orders = await myOrdersRequest.getOrders();
        this.setState({
            orders: orders,
            loading: false
        });
    }
}

export default myOrdersApp;