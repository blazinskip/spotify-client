<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen bg-gray-200 dark:bg-gray-900 background"
  >
    <div
      class="z-10 w-full h-full p-8 bg-gray-900 shadow-md md:h-1/2 md:w-1/2 text-gray-50 md:rounded-2xl"
    >
      <section class="flex flex-col items-center justify-center h-full">
        <header class="text-2xl font-bold">
          <h2>Listen your music</h2>
        </header>
        <section class="pt-8">
          <button
            class="w-full px-8 py-4 font-bold uppercase transition bg-green-600 rounded-full hover:bg-green-500"
          >
            Log In
          </button>
        </section>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheLogIn',
});
</script>
