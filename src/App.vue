<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import Shop from "./components/Shop/Shop.vue";
import Cart from "./components/Cart/Cart.vue";
import TheFooter from "./components/Footer.vue";
import data from "./data/product";
import { reactive } from "vue";
import type { ProductInterface } from "./interfaces/product.interface";

const products = reactive<ProductInterface[]>(data);
</script>

<template>
    <div class="app-container">
        <TheHeader class="header" />
        <Shop :products="products" class="shop" />
        <Cart class="cart" />
        <TheFooter class="footer" />
    </div>
</template>

<style lang="scss">
@import "./assets/main.scss";
</style>
