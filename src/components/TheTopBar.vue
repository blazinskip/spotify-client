<template>
  <div
    class="sticky top-0 z-10 flex-shrink-0 w-full bg-gray-200 bg-opacity-50 h-15 dark:bg-transparent"
  >
    <div class="flex items-center h-full px-8">
      <div class="flex space-x-4">
        <button
          class="w-8 h-8 p-1 text-gray-400 bg-black rounded-full cursor-not-allowed bg-opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="square"
              stroke-linejoin="square"
              stroke-width="1.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="w-8 h-8 p-1 bg-black rounded-full cursor-not-allowed text-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="square"
              stroke-linejoin="square"
              stroke-width="1.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheTopBar',
  setup() {},
});
</script>
