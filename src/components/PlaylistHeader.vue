<template>
  <div
    style="
      padding: 0 32px 24px;
      max-height: 500px;
      min-height: 340px;
      height: 30vh;
    "
    class="relative flex items-end overflow-hidden text-gray-50"
  >
    <section class="mr-6" style="width: 232px; min-width: 232px; height: 232px">
      <img :src="playlist.images[0].url" alt="" />
    </section>
    <section>
      <span class="relative text-xs font-bold uppercase top-4">Playlist</span>
      <h2
        class="font-bold leading-snug text-8xl"
        style="letter-spacing: -0.04em"
      >
        {{ playlist.name }}
      </h2>
      <p class="text-sm font-semibold text-gray-50 text-opacity-70">
        {{ playlist.description }}
      </p>
      <div
        class="mt-2 space-x-1 text-sm font-semibold text-gray-50 text-opacity-70"
      >
        <router-link
          class="font-bold text-opacity-100 text-gray-50 hover:underline"
          to="'/users/' + playlist.owner.display_name"
          >{{ playlist.owner.display_name }}</router-link
        >
        <span>•</span>
        <span>{{ playlist.followers.total }} like</span>
        <span>•</span>
        <span>{{ playlist.tracks.items.length }} songs</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Playlist } from '../types';

  export default defineComponent({
    name: 'PlaylistHeader',
    props: {
      playlist: {
        type: Object as PropType<Playlist>,
        default: null,
      },
    },
    setup() {
      return {};
    },
  });
</script>
