<template>
    <div id="products" class="box">
        <div class="product--header has-text-centered">
            <i class="fa fa-2x fa-user-circle"></i>
        </div>
        <div class="product-list">
            <div class="product-list-item" v-for="item in productItems" :key=item.id >
                <ProductListItem :productItem="item" />
            </div>
        </div>
        <div class="product-count has-text-right">
            <span class="has-text-weight-bold"> # of products : 4 </span>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem.vue"

export default {
    name: "ProductList",
    computed: {
        ...mapGetters([
            'productItems'
        ])
    },
    components: {
        ProductListItem
    },
    created(){
        this.$store.dispatch('getProductItems')
    },
}
</script>
<style lang="scss" scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>

