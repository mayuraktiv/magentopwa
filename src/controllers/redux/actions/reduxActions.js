import actionTypes from "./actionTypes";

const reduxActions = {};

reduxActions.replaceData = (node, data) => {
    return {
        node: node,
        data: data,
        type: actionTypes.REPLACE
    }
};

reduxActions.mergeData = (node, data) => {
    return {
        node: node,
        data: data,
        type: actionTypes.MERGE
    }
};

export default reduxActions;