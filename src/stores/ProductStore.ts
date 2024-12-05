import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  //initializing arrays for all and filtered products
  state: () => ({
    products: [] as ProductDoc[],
    filteredProducts: [] as ProductDoc[],
  }),

  //creating actions
  actions: {

    init() {
      this.products = initProducts;
      this.filteredProducts = initProducts;
      console.log("Products initialized:", this.products);
      console.log("Filtered Products initialized:", this.filteredProducts);


    },
    //can filter via category
    filterByCategory(category: string) {
      this.filteredProducts = this.products.filter((product) => product.data.category === category);

    },
    //can filter via rating above minimum rating
    filterByRating(minRating: number) {
      this.filteredProducts = this.products.filter((product) => product.data.rating >= minRating)
    },
  },
});