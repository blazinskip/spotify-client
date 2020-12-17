<template>
  <div v-if="loaded" class="flex flex-col w-screen h-screen">
    <div class="flex flex-1">
      <!-- navbar -->
      <aside
        class="flex-shrink-0 px-3 py-12 bg-gray-200 dark:bg-black dark:text-gray-50 w-72"
      >
        <sidebar /> 
      </aside>
      <div class="relative flex flex-col flex-1">
        <div
          class="absolute z-10 w-full h-16 bg-gray-200 bg-opacity-50 dark:bg-black"
        ></div>
        <main class="flex-1 bg-gray-100 dark:bg-gray-900"></main>
      </div>
    </div>
    <div class="flex-shrink-0 p-4 bg-gray-50 dark:bg-gray-800">
      <media-controls />
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue';
import { onMounted, ref } from "vue";
import MediaControls from './components/MediaControls.vue';

export default {
  name: "App",
  components: {Sidebar, MediaControls},
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
