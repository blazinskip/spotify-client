<template>
  <nav class="flex flex-col">
    <router-link
      :to="'/'"
      class="flex px-5 py-2 font-semibold transition rounded hover:text-gray-50"
      :class="{
        'text-gray-400': !isActive('/'),
        'text-gray-50': isActive('/'),
      }"
      active-class="bg-gray-50 bg-opacity-20 text-gray-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mr-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        />
      </svg>
      <span>Home</span>
    </router-link>

    <router-link
      :to="'/search'"
      class="flex px-5 py-2 font-semibold transition rounded hover:text-gray-50"
      :class="{
        'text-gray-400': !isActive('/search'),
        'text-gray-50': isActive('/search'),
      }"
      active-class="bg-gray-50 bg-opacity-20 text-gray-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mr-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span>Search</span>
    </router-link>

    <router-link
      :to="'/library'"
      class="flex px-5 py-2 font-semibold transition rounded hover:text-gray-50"
      :class="{
        'text-gray-400': !isActive('/library'),
        'text-gray-50': isActive('/library'),
      }"
      active-class="bg-gray-50 bg-opacity-20 text-gray-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mr-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
      <span>Your Library</span>
    </router-link>

    <span class="px-5 pt-6 text-sm font-semibold text-gray-400 uppercase"
      >Playlist</span
    >

    <div class="flex flex-col pt-4 space-y-2.5">
      <a
        class="flex items-center px-5 transition opacity-70 hover:opacity-100"
        href=""
      >
        <span class="flex p-1.5 mr-4 text-gray-600 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
        <span class="text-sm font-semibold text-gray-100">Create playlist</span>
      </a>

      <a
        href=""
        class="flex items-center px-5 transition opacity-70 hover:opacity-100"
      >
        <span class="mr-4 p-1.5 bg-purple-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <span class="text-sm font-semibold text-gray-100">Liked Songs</span>
      </a>
    </div>

    <hr class="mx-5 mt-4 mb-4 border-gray-800" />

    <ul>
      <li v-for="(playlist, index) in playlists" :key="`playlist-${index}`">
        <a
          class="flex px-5 py-1 text-sm font-semibold text-gray-400 transition rounded hover:text-gray-50"
          href=""
          >{{ playlist }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';

export default {
  name: 'Sidebar',
  setup() {
    const routes = [
      { to: '/', label: 'Home' },
      { to: '/search', label: 'Search' },
    ];
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = (path) => path === activeRoute.value;

    const playlists = ref([
      'Check lins',
      'Your Top Songs 2020',
      'Muzyka do pracy',
    ]);

    return {
      playlists,
      isActive,
      routes,
    };
  },
};
</script>
