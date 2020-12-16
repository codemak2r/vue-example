import axios from "axios"; 
import * as types from "./mutations-types";

const state = {
    cartItems: [],
    checkout: false
}

const mutations = {
    [types.UPDATE_CART_ITEMS] (state, payload) {
        state.cartItems = payload;
    },
    CHECKOUT (state) {
        state.checkout = true;
    }
}

const actions = {
    checkoutCart({ commit }) {
        axios.post('/api/cart/checkout').then( res => {
            commit("CHECKOUT", res.data);
        })
    },
    getCartItems ( { commit } ) {
        axios.get("/api/cart").then( response => {
            commit("UPDATE_CART_ITEMS", response.data)
        });
    },
    addCartItem ({ commit }, cartItme) {
        axios.post("/api/cart", cartItme).then( response => {
            commit("UPDATE_CART_ITEMS", response.data)
        });
    },
    removeCartItem ({ commit }, cartItem) {
        axios.post("/api/cart/delete", cartItem).then( response => {
            commit("UPDATE_CART_ITEMS", response.data)
        });
    },
    removeAllCartItems ({ commit }) {
        axios.post("/api/cart/delete/all").then( response => {
            commit("UPDATE_CART_ITEMS", response.data)
        });
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce( (acc, cartItem) => {
            return ( cartItem.quantity * cartItem.price ) + acc; 
        }, 0).toFixed(2);
    },
    cartQuanlity: state => {
        return state.cartItems.reduce((acc, cartItem)=>{
            return cartItem.quantity + acc;
        },0)
    }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters

}

export default cartModule;