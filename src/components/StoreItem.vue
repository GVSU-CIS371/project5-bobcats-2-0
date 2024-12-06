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
    <div class="button-container">
      <v-btn :style="{ backgroundColor: '#80b3ff' }" @click="handleModify">Modify</v-btn>
      <v-btn :style="{ backgroundColor: '#ff9999' }" @click="handleDelete">Delete</v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 20px;
}
</style>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase"; 
import { useRouter } from "vue-router";
import type { ProductDoc } from "@/types"; 

const props = defineProps<{
  product: ProductDoc;
}>();

// router instance
const router = useRouter();

// function to handle modify button press -> brings user to new edit page
function handleModify() {
  if (!props.product) {
    console.error("Product is undefined");
    return;
  }

  router.push({ name: "EditProduct", params: { id: props.product.id } });
}

// function to handle deleting a product -> will display confirmation message before deleting
async function handleDelete() {
  console.log(props.product.id);
  if (confirm(`Are you sure you want to delete ${props.product.data.name}?`)) {
    try {
      // get a ref of the product in firestore
      const productRef = doc(db, "products", props.product.id);
      
      // delete the products doc in firestore
      await deleteDoc(productRef); 

      console.log("Product deleted successfully:", props.product.data.name);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
}
</script>
