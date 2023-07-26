<script setup lang="ts">
import type { FilterUpdate, Filtersinterface } from '@/interfaces';


defineProps<{
    filters: Filtersinterface
}>()   

const emit = defineEmits<{
    (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>();

</script>

<template>

<div class="p-20">
    <section class="mb-20">
        <h3 class="mb-10">Rechercher</h3>
        <input :value="filters.search" @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value})" type="text" placeholder="Rechercher" />
    </section>
    <section class="mb-20">
        <h3 class="mb-10">Trier par prix</h3>
        <div class="mb-5" v-for="priceRange of [[0, 10000], [1, 7], [7, 10], [10, 10000]] as [number, number][]">
            <input :checked="filters.priceRange[0] === priceRange[0]" type="radio" @input="emit('updateFilter', { priceRange })" name="priceRance" :id="priceRange[0] + ''" />
            <label :for="priceRange[0] + ''">
            {{  priceRange[0] === 0 ? 'Tous les prix' : priceRange[0] + '€ - ' + priceRange[1] + '€' }}
            </label>
        </div>
    </section>
</div>

</template>

<style lang="scss" scoped></style>