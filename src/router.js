import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SearchPage from './pages/SearchPage.vue';
import LibraryPage from './pages/LibraryPage.vue';
import GenrePage from './pages/GenrePage.vue';
import LoginPage from './pages/LoginPage.vue';
import AuthenticatedPage from './pages/AuthenticatedPage.vue';
import LoginSuccessPage from './pages/LoginSuccessPage.vue';

const routes = [
  {
    path: '/',
    component: AuthenticatedPage,
    children: [
      { path: '/', component: HomePage },
      { path: '/search', component: SearchPage },
      { path: '/library', component: LibraryPage },
      { path: '/genre/:genreName', component: GenrePage },
    ],
  },
  { path: '/login', component: LoginPage },
  { path: '/login-success', component: LoginSuccessPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
