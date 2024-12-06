<template>
    <v-container>
        <v-card>
            <v-card-title>Add Product</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="addProduct">
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
                <v-btn type="submit" color="blue">Add Product</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { collection, addDoc } from "firebase/firestore";
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

    const product = ref<Product>({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    stock: 0,
    image: "",
    category: "",
    });

   
    const router = useRouter();

    // function adds product to firestore then brings the user back to the main page
    async function addProduct() {
    try {
        // products are stored under the "products" collection in firestore
        const docRef = await addDoc(collection(db, "products"), product.value);
        console.log("Product added with ID:", docRef.id);
        router.push("/"); //brings you back home
    } catch (error) {
        console.error("Error adding product:", error);
    }
    }
</script>
  