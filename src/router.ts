import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import SearchPage from './views/SearchPage.vue';
import LibraryPage from './views/LibraryPage.vue';
import GenrePage from './views/GenrePage.vue';
import LoginPage from './views/LoginPage.vue';
import AuthenticatedPage from './views/AuthenticatedPage.vue';
import LoginSuccessPage from './views/LoginSuccessPage.vue';
import Playlist from './views/Playlist.vue';

const routes = [
  {
    path: '/',
    component: AuthenticatedPage,
    children: [
      { path: '/', component: HomePage },
      { path: '/search', component: SearchPage },
      { path: '/library', component: LibraryPage },
      { path: '/playlist/:playlistId', component: Playlist },
      { path: '/genre/:genreName', component: GenrePage },
    ],
  },
  { path: '/login', component: LoginPage },
  { path: '/:pathMatch(.*)*', component: LoginSuccessPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
