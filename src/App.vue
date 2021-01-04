<template>
  <div v-if="loaded" class="flex flex-col w-full h-screen">
    <div class="flex flex-1">
      <!-- navbar -->
      <aside
        style="width: 232px"
        class="flex-shrink-0 pt-6 bg-gray-200 dark:bg-black dark:text-gray-50"
      >
        <sidebar />
      </aside>
      <div class="flex flex-col flex-1">
        <main class="flex flex-col flex-1 h-0 bg-gray-100 dark:bg-gray-900">
          <the-top-bar />
          <div class="overflow-auto">
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
    <div class="flex-shrink-0 p-4 bg-gray-50 dark:bg-gray-800">
      <the-media-controls />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import TheTopBar from './components/TheTopBar.vue';
import TheMediaControls from './components/TheMediaControls.vue';

export default {
  name: 'App',
  components: { Sidebar, TheTopBar, TheMediaControls },
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
