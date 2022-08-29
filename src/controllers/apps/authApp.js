import { Component } from "react";
import localStorageKeys from "../constants/localStorageKeys";
import reduxActions from "../redux/actions/reduxActions";
import userprofileRequest from "../request/userProfileRequest";

class authApp extends Component {
    componentDidMount = () => {
        this.checkAuth();
    }

    checkAuth = async () => {
        const authToken = localStorage.getItem(localStorageKeys.AUTHORIZATION_TOKEN)
        if (authToken?.length > 0) {
            const profile = await userprofileRequest.getUserProfile();
            if (profile) {
                let nodes = {};
                let nodeValues = {};
                nodes["cart_details"] = "cart_details";
                nodeValues["cart_details"] = profile.cart_details;

                nodes["userdata"] = "userdata";
                nodeValues["userdata"] = profile.userdata;

                nodes["user_status"] = "user_status";
                nodeValues["user_status"] = true;
                this.props.storeData(nodes, nodeValues);
            }
        }
    }

    static mapStateToProps = state => {
        return {};
    }

    static mapDispatchToProps = (dispatch) => {
        return {
            storeData: (node, data) => dispatch(reduxActions.mergeData(node, data)),
        };
    };
}

export default authApp;