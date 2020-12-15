<template>
  <div v-if="loaded" class="flex flex-col w-screen h-screen">
    <div class="flex flex-1">
      <aside class="flex-shrink-0 bg-gray-200 dark:bg-black w-72"></aside>
      <div class="relative flex flex-col flex-1">
        <div
          class="absolute z-10 w-full h-16 bg-gray-200 bg-opacity-50 dark:bg-black"
        ></div>
        <main class="flex-1 bg-gray-100 dark:bg-gray-900"></main>
      </div>
    </div>
    <div class="flex-shrink-0 h-20 bg-gray-50 dark:bg-gray-800"></div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";

export default {
  name: "App",
  setup() {
    const loaded = ref(false);

    onMounted(() => {
      loaded.value = true;
    });

    return {
      loaded,
    };
  },
};
</script>
