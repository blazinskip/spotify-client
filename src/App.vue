<template>
  <div v-if="loaded" class="flex flex-col w-full h-screen">
    <div class="flex flex-1">
      <!-- navbar -->
      <aside
        class="flex-shrink-0 w-64 px-3 py-6 bg-gray-200 dark:bg-black dark:text-gray-50"
      >
        <sidebar />
      </aside>
      <div class="flex flex-col flex-1">
        <main class="flex flex-col flex-1 h-0 bg-gray-100 dark:bg-gray-900">
          <div
            class="sticky top-0 z-10 flex-shrink-0 w-full h-16 bg-gray-200 bg-opacity-50 dark:bg-black"
          ></div>
          <div class="overflow-auto">
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
    <div class="flex-shrink-0 p-4 bg-gray-50 dark:bg-gray-800">
      <media-controls />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import MediaControls from './components/MediaControls.vue';

export default {
  name: 'App',
  components: { Sidebar, MediaControls },
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
