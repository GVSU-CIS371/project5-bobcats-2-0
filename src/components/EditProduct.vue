<template>
    <v-container>
      <v-card>
        <v-card-title>Edit Product</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="updateProduct">
            <v-text-field
              label="Name"
              v-model="product.name"
              required
            ></v-text-field>
            <v-textarea
              label="Description"
              v-model="product.description"
              required
            ></v-textarea>
            <v-text-field
              label="Price"
              type="number"
              v-model="product.price"
              required
            ></v-text-field>
            <v-text-field
              label="Rating"
              type="number"
              v-model="product.rating"
              required
            ></v-text-field>
            <v-text-field
              label="Stock"
              type="number"
              v-model="product.stock"
              required
            ></v-text-field>
            <v-text-field
              label="Image URL"
              v-model="product.image"
              required
            ></v-text-field>
            <v-text-field
              label="Category"
              v-model="product.category"
              required
            ></v-text-field>
            <v-btn type="submit" color="blue">Save Changes</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { doc, getDoc, updateDoc } from "firebase/firestore";
  import { db } from "@/firebase";
  
  interface Product {
    name: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    image: string;
    category: string;
  }
  
  const route = useRoute();
  const router = useRouter();
  const product = ref<Product>({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    stock: 0,
    image: "",
    category: "",
  });
  
  onMounted(async () => {
    const productId = route.params.id as string;
    const productRef = doc(db, "products", productId);
    const productSnapshot = await getDoc(productRef);
  
    if (productSnapshot.exists()) {
      product.value = productSnapshot.data() as Product;
    } else {
      router.push("/"); //back home
    }
  });
  
  async function updateProduct() {
    try {
      const productId = route.params.id as string;
      const productRef = doc(db, "products", productId);
  
      await updateDoc(productRef, product.value); //edits doc in firestore
      console.log("Product updated successfully");
      router.push("/"); // back home
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }
  </script>
  