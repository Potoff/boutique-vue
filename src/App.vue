<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import Shop from "./components/Shop/Shop.vue";
import Cart from "./components/Cart/Cart.vue";
import TheFooter from "./components/Footer.vue";
</script>

<template>
    <div class="app-container">
        <TheHeader class="header b1"/>
        <Shop class="shop b2"/>
        <Cart class="cart b3"/>
        <TheFooter class="footer b4"/>
    </div>
</template>

<style lang="scss">
@import "./assets/main.scss";



</style>
