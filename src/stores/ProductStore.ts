import { defineStore } from "pinia";
import { ProductDoc, Product } from "../types/product";
import { initProducts } from "../data-init";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useProductStore = defineStore("ProductStore", {
  //initializing arrays for all and filtered products
  state: () => ({
    products: [] as ProductDoc[],
    filteredProducts: [] as ProductDoc[],
  }),

  //creating actions
  actions: {
    async init() {
      // grabbing products from firestore
      const productsCollection = collection(db, "products");
      const querySnapshot = await getDocs(productsCollection);
      const productsList: ProductDoc[] = [];
      querySnapshot.forEach((doc) => {
        productsList.push({ id: doc.id, data: doc.data() as Product });
      });
      this.products = productsList;
      this.filteredProducts = productsList;
      if (this.products.length === 0){
        this.products = initProducts
        this.filteredProducts = initProducts
      }
      console.log("Products initialized:", this.products);
    },
    
    filterByCategory(category: string) {
      this.filteredProducts = this.products.filter((product) => product.data.category === category);
      console.log("Category Products initialized:", this.products);
      console.log("Filtered Products initialized:", this.filteredProducts);
    },

    filterByRating(minRating: number) {
      this.filteredProducts = this.products.filter((product) => product.data.rating >= minRating);
      console.log("Rating Products initialized:", this.products);
      console.log("Filtered Products initialized:", this.filteredProducts);
    },
  },
});