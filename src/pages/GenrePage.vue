<template>
  <section class="grid h-full grid-flow-row gap-8 px-8 py-4">
    <header class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-gray-50">
        {{ suggestion.name }}
      </h2>
    </header>
    <div
      class="grid gap-6"
      style="
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-template-rows: 1fr;
      "
    >
      <playlist-card
        v-for="playlist in suggestion.playlists"
        :key="playlist.id"
        :playlist="playlist"
      >
      </playlist-card>
    </div>
  </section>
</template>

<script lang="ts">
import PlaylistCard from '../components/PlaylistCard.vue';

export default {
  components: { PlaylistCard },
  name: 'GenrePage',
  setup() {
    const suggestion = {
      id: new Date().getTime(),
      name: 'Shortcuts',
      playlists: [
        {
          id: new Date().getTime(),
          title: 'Rock Classic',
          descritpion:
            'Rock legends and epic songs that continue to inspire generations.',
          thumbnailUrl:
            'https://i.scdn.co/image/ab67706f00000003519fc8771d90f496501a4da3',
        },
        {
          id: new Date().getTime(),
          title: 'Christmas Hits',
          descritpion: 'The biggest Christmas songs of all time.',
          thumbnailUrl:
            'https://i.scdn.co/image/ab67706f00000002f04cbd323e0edd1b19ef58bb',
        },
        ...Array.from({ length: 10 }, (x, i) => ({
          id: new Date().getTime(),
          title: `Hits ${i + 1}`,
          descritpion: `Descriptions ${i + 1}`,
          thumbnailUrl:
            'https://i.scdn.co/image/ab67706f00000002f04cbd323e0edd1b19ef58bb',
        })),
      ],
    };
    return { suggestion };
  },
};
</script>
