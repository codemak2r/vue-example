<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <CartList />
        </div>
        <div class="column is-9">
          <ProductList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import CartList from "./components/carts/CartList.vue"
import ProductList from "./components/products/ProductList.vue"

export default {
  name: 'App',
  components: {
    CartList,
    ProductList
  }
}
</script>

<style>
html, body {
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html, body {
    height: 100%;
  }
}
</style>
