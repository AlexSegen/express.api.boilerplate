const axios = require("axios")

const $http = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 3000
})

exports.customRequest = async (options) => {
    return axios(options)
}

exports.getItems = async (resourceName) => {
    return $http.get(resourceName);
}

exports.saveItem = async (resourceName, payload) => {
    return $http.post(`${resourceName}`, payload);
}

exports.getSingleItem = async (resourceName, itemID) => {
    return $http.get(`${resourceName}/${itemID}`);
}

exports.updateItem = async (resourceName, itemID, payload) => {
    return $http.patch(`${resourceName}/${itemID}`, payload);
}

exports.deleteItem = async (resourceName, itemID) => {
    return $http.delete(`${resourceName}/${itemID}`);
}