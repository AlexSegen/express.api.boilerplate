const api = require("./api");
const resourceName = "status"

test("Check API Status", async () => {
    let response = await api.customRequest({
        method: 'get',
        url: resourceName
      });
    expect(response.status).toBe(200)
});