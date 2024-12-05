<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in electronicsProducts"
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

// filter products by electronics
onMounted(() => {
  store.init();  // Initialize store
  store.filterByCategory("Electronics");
});

// Access filtered groceries
const electronicsProducts = computed(() => store.filteredProducts);
</script>
