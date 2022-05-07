import { Component } from "react";
import getCartId from "../lib/getCartId";
import reduxActions from "../redux/actions/reduxActions";
import configRequest from "../request/configRequest";
import emptyCartRequest from "../request/emptyCartRequest";

class configApp extends Component {
    constructor(props) {
        super(props);
        this.fetchConfigData = this.fetchConfigData.bind(this);
    }

    componentDidMount = () => {
        this.fetchConfigData();
        this.createEmptyCart();
    };

    createEmptyCart = async () => {
        if (!getCartId()) {
            const res = await emptyCartRequest.createEmptyCart();
        }
    }

    fetchConfigData = async () => {
        this.setState({ loading: true });
        const configData = await configRequest.getConfigData();
        let nodes = {};
        let nodeValues = {};
        nodes["categories"] = "categories";
        nodeValues["categories"] = configData.categories;
        nodes["cms_pages"] = "cms_pages";
        nodeValues["cms_pages"] = [];
        nodes["rating_options"] = "rating_options";
        nodeValues["rating_options"] = configData.rating_options;
        this.props.storeData(nodes, nodeValues);
    };

    static mapStateToProps = state => {
        let loading = true;
        if (state.db.categories?.length > 0) {
            loading = false
        }
        return {
            loading: loading,
            categories: state.db.categories,
            cms_pages: state.db.cms_pages
        };
    }

    static mapDispatchToProps = dispatch => {
        return {
            storeData: (node, data) => dispatch(reduxActions.replaceData(node, data))
        }
    }
}

export default configApp;