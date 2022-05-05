const queryString = {};

queryString.parse = (query) => {
    let params = new URLSearchParams(query);
    return params.getAll();
};

queryString.toString = (params) => {
    let query = new URLSearchParams(params);
    return query.toString();
}

export default queryString;