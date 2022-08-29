import { connect } from "react-redux";
import authApp from "../../apps/authApp";
import AuthContext from "./AuthContext";

class AuthProvider extends authApp {
    render() {
        return (
            <AuthContext.Provider value={{ userdata: this.props.userdata, user_status: this.props.user_status }} {...this.props} />
        );
    }
}

export default connect(authApp.mapStateToProps, authApp.mapDispatchToProps)(AuthProvider);