const axios = require("axios");
const apiResource = "http://localhost:3000/subscribers";

let itemID = "";

const customRequest = options => {
    return axios(options);
}

const getItems = () => {
    let options = {
        method: 'get',
        url: apiResource
    }
    return customRequest(options);
}

const getSingleItem = () => {
    let options = {
        method: 'get',
        url: apiResource + "/" + itemID
    }
    return customRequest(options);
}

const saveItem = () => {
    let data = {
        name: "testuser",
        subscribedToChannel: "testchannel"
    }
    let options = {
        method: 'post',
        url: apiResource,
        data: data
    }
    return customRequest(options);
}

const updateItem = () => {
    let data = {
        name: "testuser updated"
    }
    let options = {
        method: 'patch',
        url: apiResource + "/" + itemID,
        data: data
    }
    return customRequest(options);
}

const deleteItem = () => {
    let options = {
        method: 'delete',
        url: apiResource + "/" + itemID
    }
    return customRequest(options);
}

test("Get all Items", async () => {
    let response = await getItems();
    expect(response.status).toBe(200)
});

test("Save Item", async () => {
    let response = await saveItem();
    let data = await response.data;
    itemID = data._id;
    expect(response.status).toBe(201)
});

test("Get Single Item", async () => {
    let response = await getSingleItem();
    expect(response.status).toBe(200)
});

test("Update Item", async () => {
    let response = await updateItem();
    let data = await response.data;
    expect(data.name).toBe("testuser updated")
});

test("Delete Item", async () => {
    let response = await deleteItem();
    expect(response.status).toBe(200)
});

