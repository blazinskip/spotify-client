<template>
  <section>
    <router-link
      class="relative flex flex-col w-full p-4 bg-black rounded group bg-opacity-20"
      :to="'/playlist/' + playlist.id"
    >
      <div
        class="absolute inset-0 transition-colors duration-300 ease-in-out rounded hover:bg-white hover:bg-opacity-10"
      ></div>
      <div class="relative pointer-events-none">
        <img class="mb-4 rounded" :src="playlist.thumbnailUrl" alt="" />
        <button
          class="absolute w-10 h-10 text-gray-400 duration-300 opacity-0 ease-in-outtransition right-2 bottom-6 group-hover:text-green-500 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col" style="min-height: 64px">
        <h3 class="text-base font-bold text-gray-50">
          {{ playlist.title }}
        </h3>
        <div
          class="flex-1 mt-1 overflow-hidden text-sm font-normal text-gray-400 break-words overflow-ellipsis"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          "
        >
          <span>{{ playlist.descritpion }}</span>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Playlist } from '../types';

export default defineComponent({
  name: 'PlaylistCard',
  props: {
    playlist: {
      type: Object as PropType<Playlist>,
    },
  },
});
</script>
