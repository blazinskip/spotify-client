<template>
  <div>{{ track.id }}</div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { PlaylistTrack } from '../types';

  export default defineComponent({
    name: 'PlaylistTrack',
    props: {
      track: {
        type: Object as PropType<PlaylistTrack>,
        default: null,
      },
    },
    setup() {
      return {};
    },
  });
</script>
