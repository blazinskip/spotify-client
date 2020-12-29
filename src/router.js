import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SearchPage from './pages/SearchPage.vue';
import LibraryPage from './pages/LibraryPage.vue';
import GenrePage from './pages/GenrePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage },
  { path: '/library', component: LibraryPage },
  { path: '/genre/:genreName', component: GenrePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
