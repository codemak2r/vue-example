import apiClient from "./apiClient"

const install = function (Vue) {
    Vue.$apiClient = Vue.prototype.$apiClient = apiClient;
}

export default {
    install
}