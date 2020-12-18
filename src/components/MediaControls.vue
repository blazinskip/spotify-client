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
    <div class="flex flex-col flex-1 space-y-2">
      <div class="flex items-center justify-center space-x-2">
        <button class="w-4 h-4 text-gray-400 transition hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
            />
          </svg>
        </button>

        <button class="w-4 h-4 text-gray-400 transition hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button class="w-8 h-8 text-gray-400 transition hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button class="w-4 h-4 text-gray-400 transition transform hover:text-gray-100 -scale-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button class="w-4 h-4 text-gray-400 transition transform rotate-180 hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
            />
          </svg>
        </button>
      </div>

      <div class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
        <span class="flex-shrink-0">22:31</span>
        <div class="relative flex-1 w-24 h-1 bg-gray-600 rounded">
          <div
            class="absolute w-1/3 h-1 transition bg-gray-300 rounded group-hover:bg-green-400"
          ></div>
        </div>
        <span class="flex-shrink-0">48:54</span>
      </div>
    </div>

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
          <div
            class="absolute w-1/3 h-1 transition bg-gray-300 rounded group-hover:bg-green-400"
          ></div>
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
