import { Component } from "react";
import commonParser from "../lib/commonParser";
import urlResolverRequest from "../request/urlResolverRequest";

class urlResolverApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            urlInfo: null,
        };
        this.fetchUrlInfo = this.fetchUrlInfo.bind(this);
    }

    componentDidMount = () => {
        this.setUrlInfo();
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.match.url !== this.props.match.url || prevProps.urlInfo !== this.props.urlInfo) {
            this.setUrlInfo();
        }
    }

    setUrlInfo = () => {
        if(this.props.urlInfo) {
            this.setState({
                loading: false,
                urlInfo: this.props.urlInfo
            });
        }
        else {
            this.fetchUrlInfo();
        }
    }

    fetchUrlInfo = async () => {
        let data = {
            url: this.props.match.url.substring(1)
        }
        const urlInfo = await urlResolverRequest.getUrlInfo(data);
        this.setState({
            loading: false,
            urlInfo: urlInfo
        });
    }

    static mapStateToProps = (state, ownProps) => {
        let urlInfo = false;
        let url = ownProps.match.url.substring(1);
        if(url.includes('.html')) {
            let _splits = url.split('.html');
            url = _splits[0];
        }
        let category = state.db.categories?.find(item => item.url_path === url);
        let cms_page = state.db.cms_pages?.find(item => item.identifier === url);
        let product = state.db.products?.find(item => item.url_key === url);
        if(category) {
            urlInfo = category;
            urlInfo["page_type"] = "CATEGORY";
        }
        else if(cms_page) {
            urlInfo = cms_page;
            urlInfo["page_type"] = "CMS";
        }
        else if(product) {
            urlInfo = product;
            urlInfo["page_type"] = "PRODUCT";
        }
        return {
            urlInfo: urlInfo
        }
    }
}

export default urlResolverApp;
