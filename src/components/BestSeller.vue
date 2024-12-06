<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in bestSellerProducts"
        :key="product.id"
        cols="12"
        md="4"
        lg="3"
      >
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue';
import { useProductStore } from '../stores/ProductStore.ts';  
import StoreItem from '../components/StoreItem.vue';  // displays products

const store = useProductStore();

// initalize sotre filter by rating
onMounted(() => {
  store.init();  // Initialize the products
});

watch(
  () => store.products,  // Watch for changes in products
  (newProducts) => {
    store.filterByRating(4.5);
  },
  { immediate: true }
);

// Access best seller products
const bestSellerProducts = computed(() => store.filteredProducts);
</script>