const api = require("./api");

let itemID = "";

const resourceName = "subscribers"

test("Get all Items", async () => {
    let response = await api.getItems(resourceName);
    expect(response.status).toBe(200)
});

test("Save Item", async () => {
    let payload = {
        name: "testuser",
        subscribedToChannel: "testchannel"
    }
    let response = await api.saveItem(resourceName, payload);
    let data = await response.data;
    itemID = data._id;
    expect(response.status).toBe(201)
});

test("Get Single Item", async () => {
    let response = await api.getSingleItem(resourceName, itemID);
    expect(response.status).toBe(200)
});

test("Update Item", async () => {
    let payload = {
        name: "testuser updated",
    }
    let response = await api.updateItem(resourceName, itemID, payload);
    let data = await response.data;
    expect(data.name).toBe("testuser updated")
});

test("Delete Item", async () => {
    let response = await api.deleteItem(resourceName, itemID);
    expect(response.status).toBe(200)
});