<template>
  <v-card>
    <v-img :src="product.data.image" alt="Product Image" />
        <v-card-title>{{ product.data.name }}</v-card-title>
    <v-card-subtitle>{{ product.data.category }}</v-card-subtitle>
    <v-card-text>
      <p><strong>Price:</strong> ${{ product.data.price }}</p>
      <p><strong>Rating:</strong> {{ product.data.rating }} stars</p>
      <p><strong>Stock:</strong> {{ product.data.stock }} available</p>
      <p><strong>Description:</strong> {{ product.data.description }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
interface ProductData {
  image: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
}

defineProps<{
  product: { data: ProductData };
}>();
</script>
