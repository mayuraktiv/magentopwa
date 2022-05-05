import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import configRequest from "../request/configRequest";

class configApp extends Component {
    constructor(props) {
        super(props);
        this.fetchConfigData = this.fetchConfigData.bind(this);
    }

    componentDidMount = () => {
        this.fetchConfigData();
    };

    fetchConfigData = async () => {
        this.setState({ loading: true });
        const configData = await configRequest.getConfigData();
        let nodes = {};
        let nodeValues = {};
        nodes["categories"] = "categories";
        nodeValues["categories"] = configData.categories;
        nodes["cms_pages"] = "cms_pages";
        nodeValues["cms_pages"] = [];
        this.props.storeData(nodes, nodeValues);
    };

    static mapStateToProps = state => {
        let loading = true;
        if(state.db.categories?.length > 0) {
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