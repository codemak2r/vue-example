<template>
    <div id="cart">
        <div class="cart--header has-text-centered">
            <i class="fa fa-2x fa-shopping-cart"></i>
        </div>
        <p v-if = "!cartItems.length" class="crat-empty-text has-tetxt-centered"> 
            Add some items to the cart!
        </p>
        <ul v-if="cartItems.length > 0">
            <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">  
                <CartListItem :item = "cartItem" />
            </li>
            <div class="cart-details">
                <p>Total Quantity: <span class="has-text-weight-bold">{{ cartQuanlity }}</span></p>
                <p class="cart-remove-all--text" @click="removeAllCartItems">
                    <i class="fa fa-trash"></i> Remove all
                </p>
            </div>
        </ul>
        <button class="button is-primary" @click="checkoutCart">
            checkout ( <span class="has-text-weight-bold">${{ cartTotal }}</span>)
        </button>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import CartListItem from "./CartListItem.vue"

export default {
    name: "CartList",
    created() {
        this.$store.dispatch("getCartItems")
    },
    components: {
        CartListItem
    },
    computed: {
        ...mapGetters([
            "cartItems",
            "cartTotal",
            "cartQuanlity"
        ])
    },
    methods: {
        ...mapActions([
            "removeAllCartItems",
            "checkoutCart"
        ])
    }
}
</script>
<style lang="scss" scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>

