import localStorageKeys from "../constants/localStorageKeys";

const fetchRequest = {};

fetchRequest.executeFetch = async (request) => {
    let url = "http://jsmagento.ictstagingsite.com/graphql?query=" + encodeURIComponent(request);
    const response = await fetch(url, {
        method: "GET",
        headers: fetchRequest.getHeaders()
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
    return data;
};

fetchRequest.executePostFetch = async (request) => {
    let url = "http://jsmagento.ictstagingsite.com/graphql";
    const response = await fetch(url, {
        method: "POST",
        headers: fetchRequest.getHeaders(),
        body: request
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
    if (data?.errors?.length > 0) {
        const authError = data.errors.find(item => item.extensions.category === "graphql-authorization");
        if (authError) {
            await localStorage.clear();
            window.location.href = "/";
        }
    }
    return data;
}


fetchRequest.getHeaders = () => {
    var myHeaders = new Headers();
    const authorizationToken = localStorage.getItem(localStorageKeys.AUTHORIZATION_TOKEN)
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    if (authorizationToken?.length > 0) {
        myHeaders.append("Authorization", `Bearer ${authorizationToken}`);
    }
    return myHeaders
}

export default fetchRequest