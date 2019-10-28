const api = require("./api");
const resourceName = "auth/login"

test("Login", async () => {
    let user = {
        email: "ale4@mail.cl",
        password:"12345678"
    }
    let response = await api.login(resourceName, user);
    expect(response.status).toBe(200)
});