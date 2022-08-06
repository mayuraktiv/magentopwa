const fetchRequest = {};

fetchRequest.executeFetch = async (request) => {
    let url = "http://local.m243.com/graphql?query=" + encodeURIComponent(request);
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
    let url = "http://local.m243.com/graphql";
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
    return data;
}

fetchRequest.getHeaders = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer qeyc29tkjrykpgd8oelnpi7wu9rmyj5k");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    return myHeaders
}

export default fetchRequest