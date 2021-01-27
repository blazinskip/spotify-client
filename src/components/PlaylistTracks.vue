<template>
  <div role="grid">
    <slot name="tracks"></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PlaylistTracks',
    setup() {
      return {};
    },
  });
</script>
