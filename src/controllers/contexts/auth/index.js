import { connect } from "react-redux";
import authApp from "../../apps/authApp";
import AuthContext from "./AuthContext";

class AuthProvider extends authApp {
    render() {
        return (
            <AuthContext.Provider value={null} {...this.props} />
        );
    }
}

export default connect(authApp.mapStateToProps, authApp.mapDispatchToProps)(AuthProvider);