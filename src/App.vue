<template>
  <div class="flex flex-col w-screen h-screen bg-gray-900">
    <div class="flex flex-1">
      <aside class="flex-shrink-0 bg-black w-72"></aside>
      <div class="relative flex flex-col flex-1">
        <div class="absolute z-10 w-full h-16 bg-black bg-opacity-50"></div>
        <main class="flex-1 bg-gray-900"></main>
      </div>
    </div>
    <div class="flex-shrink-0 h-20 bg-gray-800"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>
