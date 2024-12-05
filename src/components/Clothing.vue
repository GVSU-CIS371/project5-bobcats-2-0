<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in clothingProducts"
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
import { computed, onMounted } from 'vue';
import { useProductStore } from '../stores/ProductStore.ts';
import StoreItem from '../components/StoreItem.vue';

const store = useProductStore();

// filter products by clothing
onMounted(() => {
  store.init();  // Initialize store
  store.filterByCategory("Clothing"); 
});

// Access filtered clthing
const clothingProducts = computed(() => store.filteredProducts);
</script>
