<template>
  <div class="flex flex-col w-full h-screen">
    <div class="flex flex-1">
      <aside
        style="width: 232px"
        class="flex-shrink-0 pt-6 bg-gray-200 dark:bg-black dark:text-gray-50"
      >
        <the-sidebar />
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
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import TheMediaControls from '../components/TheMediaControls.vue';
import TheSidebar from '../components/TheSidebar.vue';
import TheTopBar from '../components/TheTopBar.vue';
import useState from '../use/use-state';

export default defineComponent({
  components: { TheSidebar, TheTopBar, TheMediaControls },
  name: 'TheAuthenticated',
  setup() {
    const router = useRouter();
    const { state } = useState();
    onMounted(() => {
      if (!state.authenticated) {
        router.push({ path: '/login' });
      }
    });

    return {};
  },
});
</script>
