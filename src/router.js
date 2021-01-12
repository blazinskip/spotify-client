import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SearchPage from './pages/SearchPage.vue';
import LibraryPage from './pages/LibraryPage.vue';
import GenrePage from './pages/GenrePage.vue';
import TheLogIn from './components/TheLogIn.vue';
import TheAuthenticated from './components/TheAuthenticated.vue';
import SuccessfulLoginPage from './pages/SuccessfulLoginPage.vue';

const routes = [
  {
    path: '/',
    component: TheAuthenticated,
    children: [
      { path: '/', component: HomePage },
      { path: '/search', component: SearchPage },
      { path: '/library', component: LibraryPage },
      { path: '/genre/:genreName', component: GenrePage },
    ],
  },
  { path: '/log-in', component: TheLogIn },
  { path: '/successful-login', component: SuccessfulLoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
