<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import Shop from "./components/Shop/Shop.vue";
import Cart from "./components/Cart/Cart.vue";
import TheFooter from "./components/Footer.vue";
import data from "./data/product";

import { reactive } from "vue";
import type { ProductCartInterface, ProductInterface } from "@/interfaces";

const state = reactive<{
    products: ProductInterface[],
    cart: ProductCartInterface[]
}>({
    products: data,
    cart: [],
});

function addProductToCart(productId: number): void {
    const product = state.products.find((product) => product.id === productId);
    if (product) {
        const productInCart = state.cart.find((product) => product.id === productId);
        if (productInCart) {
            productInCart.quantity++;
        } else {
            state.cart.push({ ...product, quantity: 1 });
        }
    }
}

function removeProductFromCart(productId: number): void {
    const productFromCart = state.cart.find((product) => product.id === productId);
    if (productFromCart) {
        if (productFromCart.quantity === 1) {
            state.cart = state.cart.filter((product) => product.id !== productId);
        } else {
            productFromCart.quantity--;
        }
    }
}

</script>

<template>
    <div class="app-container">
        <TheHeader class="header" />
        <Shop :products="state.products" @add-product-to-cart="addProductToCart" class="shop" />
        <Cart :cart="state.cart" class="cart" @remove-product-from-cart="removeProductFromCart" />
        <TheFooter class="footer" />
    </div>
</template>

<style lang="scss">
@import "./assets/main.scss";
</style>
