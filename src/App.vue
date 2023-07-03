<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import Shop from "./components/Shop/Shop.vue";
import Cart from "./components/Cart/Cart.vue";
import TheFooter from "./components/Footer.vue";
</script>

<template>
    <div class="app-container">
        <TheHeader class="header"/>
        <Shop class="shop"/>
        <Cart class="cart"/>
        <TheFooter class="footer"/>
    </div>
</template>

<style lang="scss">
@import "./assets/main.scss";



</style>
