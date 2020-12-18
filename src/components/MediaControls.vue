<template>
  <div class="flex">

    <!-- Left -->
    <div class="flex flex-1">
      <div class="flex mr-4">
        <img
          src="https://i.scdn.co/image/4254189adc2b19e48b2a7be62f6322d2d86708bd"
          alt=""
          class="w-auto h-16 rounded"
        />
      </div>
      <div class="flex flex-col justify-center">
        <span class="text-sm font-semibold text-gray-200"
          >Facebook React with Dan Abramov</span
        ><span class="text-xs font-semibold text-gray-400">Software Daily</span>
      </div>
    </div>

    <!-- Center -->
    <div class="flex-1"></div>

    <!-- Right column -->
    <div class="flex items-center justify-end flex-1 space-x-4">
      <button class="text-gray-400 transition w-7 h-7 hover:text-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="square"
            stroke-linejoin="square"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </button>
      <button class="w-6 h-6 text-gray-400 transition hover:text-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </button>
      <div class="flex items-center space-x-2 group">
        <button class="w-6 h-6 text-gray-400 transition hover:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="square"
              stroke-linejoin="square"
              stroke-width="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </button>
        <div class="relative w-24 h-1 bg-gray-600 rounded">
          <div class="absolute w-1/3 h-1 transition bg-gray-300 rounded group-hover:bg-green-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";

export default {
  name: "MediaControls",
  setup() {
    const playlists = ref(["Check lins", "Your Top Songs 2020", "Muzyka do pracy"]);

    return {
      playlists,
    };
  },
};
</script>
