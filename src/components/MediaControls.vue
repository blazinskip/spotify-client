<template>
  <div class="flex">
    <div class="flex flex-1">
      <div class="flex mr-4">
        <img
          src="https://i.scdn.co/image/4254189adc2b19e48b2a7be62f6322d2d86708bd"
          alt=""
          class="w-auto h-16 rounded"
        />
      </div>
      <div class="flex flex-col justify-center">
        <span class="text-sm font-semibold text-gray-200">Facebook React with Dan Abramov</span
        ><span class="text-xs font-semibold text-gray-400">Software Daily</span>
      </div>
    </div>
    <div class="flex-1"></div>
    <div class="flex-1"></div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";

export default {
  name: "MediaControls",
  setup() {
    const playlists = ref(["Check lins", "Your Top Songs 2020", "Muzyka do pracy"]);

    return {
      playlists,
    };
  },
};
</script>
