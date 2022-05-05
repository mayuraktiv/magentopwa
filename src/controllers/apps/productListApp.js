import { Component } from "react";
import reduxActions from "../redux/actions/reduxActions";
import productListRequest from "../request/productListRequest";
import queryString from 'query-string';

class productListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loadingMore: false,
            filterLoading: false,
            appliedFilters: {},
            product_skus_loadmore: [],
            page: 1,
            limit: 20,
            sort: "position",
            view: "grid",
            endReached: false
        };
        this.fetchProducts = this.fetchProducts.bind(this);
    }

    componentDidMount = () => {
        this.loadComponent();
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.location.pathname !== this.props.location.pathname || prevProps.location.search !== this.props.location.search) {
            this.loadComponent();
        }
    }

    loadComponent = () => {
        const query = this.props.location.search.substring(1);
        const filterObj = queryString.parse(query);
        this.setState({
            appliedFilters: filterObj
        }, () => {
            if (this.props.history.action === "PUSH" || window.reload) {
                this.fetchProducts();
            }
        });
    }

    fetchProducts = async () => {
        if (!this.props.productListingData) {
            this.setState({ loading: true });
        }
        let data = {
            ...this.state,
            ...this.props.urlInfo,
            path: this.props.location.pathname + this.props.location.search
        }
        const productData = await productListRequest.fetchProducts(data);
        this.setState({
            endReached: productData.page_info.current_page === productData.page_info.total_pages
        });
        window.reload = false;
        if (productData.total_count > 0 && productData.path?.length > 0) {
            let historyData = {
                path: productData.path,
                data: {
                    filters: productData.filters,
                    product_skus: productData.product_skus,
                    total_count: productData.total_count,
                    sort_fields: productData.sort_fields
                }
            }
            let nodes = {};
            let nodeValues = {};
            nodes["products"] = "products";
            nodeValues["products"] = productData.products;
            nodes["history"] = "history";
            nodeValues["history"] = historyData;
            this.props.storeData(nodes, nodeValues);
        }
    };

    changeView = (value) => {
        console.log("changeView--->", value);
        this.setState({
            view: value
        });
    }

    setAppliedFilters = () => {
        const query = this.props.location.search.substring(1);
        const filterObj = queryString.parse(query);
        this.setState({
            appliedFilters: filterObj
        });
    }

    setFilterAndSort = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const updateAppliedFilters = { ...this.state.appliedFilters };
        updateAppliedFilters[name] = value;
        this.setState({
            appliedFilters: updateAppliedFilters
        }, () => {
            this.applyFiltersAndSort();
        });
    }

    applyFiltersAndSort = () => {
        let query = queryString.stringify(this.state.appliedFilters);
        let path = this.props.location.pathname + "?" + query;
        this.props.history.push(path);
    }

    loadMoreProducts = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.fetchLoadMoreProducts();
        })
    }

    fetchLoadMoreProducts = async () => {
        this.setState({ loadingMore: true });
        let data = {
            ...this.state,
            ...this.props.urlInfo,
            path: this.props.location.pathname + this.props.location.search
        }
        const productData = await productListRequest.fetchProducts(data);
        this.setState({
            endReached: productData.page_info.current_page === productData.page_info.total_pages,
            loadingMore: false,
            product_skus_loadmore: [...this.state.product_skus_loadmore, ...productData.product_skus]
        });
        if (productData.total_count > 0) {
            let nodes = {};
            let nodeValues = {};
            nodes["products"] = "products";
            nodeValues["products"] = productData.products;
            this.props.storeData(nodes, nodeValues);
        }
    }

    static mapStateToProps = (state, ownProps) => {
        const path = ownProps.location.pathname + ownProps.location.search;
        const history = state.db.history;
        let productListingData = history.find(item => item.path === path);
        return {
            productListingData: productListingData ? productListingData : null
        };
    }

    static mapDispatchToProps = dispatch => {
        return {
            storeData: (node, data) => dispatch(reduxActions.mergeData(node, data))
        }
    }
}

export default productListApp;