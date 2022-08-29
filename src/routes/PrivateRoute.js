import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../controllers/contexts/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user_status: authenticated } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) => {
                return authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/customer/account/login/" />
                );
            }}
        />
    );
};

export default PrivateRoute;