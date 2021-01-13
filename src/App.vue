<template>
  <div v-if="loaded">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const loaded = ref(false);
    onMounted(() => {
      localStorage.setItem('theme', 'dark'); // Used right now
      loaded.value = true;
    });

    return {
      loaded,
    };
  },
});
</script>
