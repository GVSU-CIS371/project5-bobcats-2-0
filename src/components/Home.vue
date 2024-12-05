<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in filteredProducts"
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
import { useProductStore } from '../stores/ProductStore'; 
import StoreItem from '../components/StoreItem.vue'; 

// access Pinia store
const store = useProductStore();

// get filteredProducts from store
const filteredProducts = computed(() => store.filteredProducts);

// initialize store with product list when component is mounted
onMounted(() => {
  store.init();  // Initializes products and filteredProducts with initProducts
  console.log(store.filteredProducts); // Check if filteredProducts has data after initialization
});
</script>

