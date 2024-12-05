import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import Groceries from "./components/Groceries.vue"
import Electronics from "./components/Electronics.vue"
import Clothing from "./components/Clothing.vue"
import BestSeller from "./components/BestSeller.vue"

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/groceries",
    name: "groceries",
    props: true,
    component: Groceries,
  },
  {
    path: "/electronics",
    name: "electronics",
    props: true,
    component: Electronics,
  },
  {
    path: "/clothing",
    name: "clothing",
    props: true,
    component: Clothing,
  },
  {
    path: "/bestseller",
    name: "bestseller",
    props: true,
    component: BestSeller,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
