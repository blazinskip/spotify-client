<template>
  <div role="grid">
    <div
      style="
        position: sticky;
        top: 60px;
        z-index: 2;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        border-bottom: 1px solid transparent;
        height: 36px;
      "
    >
      Tests
    </div>
    <slot name="tracks"></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Playlist } from '../types';

  export default defineComponent({
    name: 'PlaylistTracks',
    props: {
      playlist: { type: Object as PropType<Playlist>, default: null },
    },
    setup() {
      return {};
    },
  });
</script>
