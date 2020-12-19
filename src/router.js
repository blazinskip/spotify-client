import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import LibraryPage from "./pages/LibraryPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/library", component: LibraryPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
