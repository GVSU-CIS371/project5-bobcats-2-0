<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in groceriesProducts"
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

// filter products by groceries
onMounted(() => {
  store.init();  // Initialize store
  store.filterByCategory("Groceries");  // filters to show growceries
});

// Access filtered groceries
const groceriesProducts = computed(() => store.filteredProducts);
</script>
