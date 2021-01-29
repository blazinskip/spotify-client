/* eslint-disable no-undef */
<template>
  <div
    class="px-8"
    role="grid"
    :aria-rowcount="1 + playlist.tracks.limit"
    :aria-colcount="5"
    :aria-label="playlist.name"
    tabindex="0"
  >
    <div class="sticky top-0 mb-4 border-b border-gray-600 border-opacity-60">
      <div
        class="grid items-center h-8 gap-4 px-4 text-xs font-semibold text-gray-400 uppercase bg-gray-900 grid-cols-playlist"
        role="row"
        aria-rowindex="1"
      >
        <span
          class="flex items-center self-stretch"
          role="columnheader"
          aria-colindex="1"
          tabindex="-1"
          >#</span
        >
        <span
          class="flex items-center self-stretch"
          role="columnheader"
          aria-colindex="1"
          tabindex="-1"
          >Title</span
        >
        <span
          class="flex items-center self-stretch"
          role="columnheader"
          aria-colindex="1"
          tabindex="-1"
          >Album</span
        >
        <span
          class="flex items-center self-stretch"
          role="columnheader"
          aria-colindex="1"
          tabindex="-1"
          >Date added</span
        >
        <span
          class="flex items-center self-stretch"
          role="columnheader"
          aria-colindex="1"
          tabindex="-1"
        ></span>
      </div>
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
  });
</script>
