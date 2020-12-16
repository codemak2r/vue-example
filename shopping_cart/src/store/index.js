import Vue from 'vue';
import Vuex from 'vuex';
import Cart from "./modules/carts";
import Product from "./modules/products";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Product,
        Cart
    }
});