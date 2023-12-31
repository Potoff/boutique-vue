<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import Shop from "./components/Shop/Shop.vue";
import Cart from "./components/Cart/Cart.vue";
import TheFooter from "./components/Footer.vue";
import data from "./data/product";

import { computed, reactive } from "vue";
import type { FilterUpdate, Filtersinterface, ProductCartInterface, ProductInterface } from "@/interfaces";
import { DEFAULT_FILTERS } from "./data/filters";

const state = reactive<{
    products: ProductInterface[],
    cart: ProductCartInterface[],
    filters: Filtersinterface
}>({
    products: data,
    cart: [],
    filters: { ...DEFAULT_FILTERS }
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
};

function updateFilter(filterUpdate: FilterUpdate) {
    if (filterUpdate.search !== undefined) {
        state.filters.search = filterUpdate.search;
    } else if (filterUpdate.priceRange) {
        state.filters.priceRange = filterUpdate.priceRange;
    } else if (filterUpdate.category) {
        state.filters.category = filterUpdate.category;
    } else {
        state.filters = { ...DEFAULT_FILTERS };
    }
}

const cartEmpty = computed(() => {
    return state.cart.length === 0;
})

const filteredProducts = computed(() => {
    return state.products.filter((product) => {
        if (
            product.title.toLocaleLowerCase().startsWith(state.filters.search.toLocaleLowerCase()) &&
            product.price >= state.filters.priceRange[0] &&
            product.price <= state.filters.priceRange[1] &&
            (product.category === state.filters.category || state.filters.category === "all")
        ) {
            return true;
        } else {
            return false;
        }
    });
});

</script>

<template>
    <div class="app-container" :class="{
        gridEmpty: cartEmpty
    }">
        <TheHeader class="header" />
        <Shop :products="filteredProducts" @add-product-to-cart="addProductToCart" @update-filter="updateFilter"
            class="shop" :filters="state.filters" />
        <Cart :cart="state.cart" class="cart" @remove-product-from-cart="removeProductFromCart" v-if="!cartEmpty" />
        <TheFooter class="footer" />
    </div>
</template>

<style lang="scss">
@import "./assets/main.scss";
</style>
