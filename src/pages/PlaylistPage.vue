<template>
  <div class="px-8 py-6">
    <div style="max-height: 500px; min-height: 340px; height: 30vh">
      <h2 class="text-gray-50">{{ route.params.playlistId }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>
