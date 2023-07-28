<script setup lang="ts">
import type { FilterUpdate, Filtersinterface, Category } from '@/interfaces';


defineProps<{
    filters: Filtersinterface
    nbrOfProducts: number
}>()

const emit = defineEmits<{
    (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>();

</script>

<template>
    <div class="p-20 d-flex flex-column">
        <section class="mb-20">
            <h3 class="mb-10">Rechercher</h3>
            <input :value="filters.search"
                @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value })" type="text"
                placeholder="Rechercher" />
        </section>
        <section class="mb-20">
            <h3 class="mb-10">Trier par prix</h3>
            <div class="mb-5" v-for="priceRange of [[0, 10000], [1, 7], [7, 10], [10, 10000]] as [number, number][]">
                <input :checked="filters.priceRange[0] === priceRange[0]" type="radio"
                    @input="emit('updateFilter', { priceRange })" name="priceRance" :id="priceRange[0] + ''" />
                <label :for="priceRange[0] + ''">
                    {{ priceRange[0] === 0 ? 'Tous les prix' : priceRange[0] + '€ - ' + priceRange[1] + '€' }}
                </label>
            </div>
        </section>
        <section class="mb-20 flex-fill">
            <h3 class="mb-10">Trier par Catégorie</h3>
            <p class="category" :class="{selected: filters.category === category}" v-for="category in (['healthy', 'junk', 'italian', 'all'] as Category[])" @click="emit('updateFilter', { category })"> {{ category }}</p>
        </section>
        <small class="mb-5">Nombre de résultats :<strong> {{ nbrOfProducts }}</strong></small>
        <button class="btn btn-danger" @click="emit('updateFilter', {})">Supprimer les filtres</button>
    </div>
</template>

<style lang="scss" scoped>

.category {
    cursor: pointer;
    font-size: 14px;
    padding: 5px 0;
    line-height: 18px;
    &.selected {
        font-weight: bold;
        text-decoration: underline;
    }
    &:hover {
        text-decoration: underline;
    }
}

</style>