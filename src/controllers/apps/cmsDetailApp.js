import { Component } from "react";
import cmsDetailRequest from "../request/cmsDetailRequest";

class cmsDetailApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cmsData: null,
            loading: false
        }
    }

    componentDidMount = () => {
        this.getCmsDetail();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.getCmsDetail();
        }
    }

    getCmsDetail = async () => {
        this.setState({ loading: true });
        const cmsData = await cmsDetailRequest.getCmsDetail(this.props.urlData);
        this.setState({
            cmsData,
            loading: false
        });
    }
}

export default cmsDetailApp;