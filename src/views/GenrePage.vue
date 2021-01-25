<template>
  <section class="flex flex-col px-8 py-4">
    <header class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-gray-50">Recently Played</h2>
    </header>
    <div
      v-if="recentlyPlayed"
      class="grid gap-6"
      style="
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-template-rows: auto;
      "
    >
      <track-album-card
        v-for="item in recentlyPlayed.items"
        :key="item.track.album.id"
        :track="item.track"
      />
    </div>
  </section>
</template>

<script lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import TrackAlbumCard from '../components/TrackAlbumCard.vue';
  import { ResultItem } from '../types';
  import useState from '../use/use-state';

  export default {
    name: 'GenrePage',
    components: { TrackAlbumCard },
    setup() {
      const route = useRoute();
      const { token } = useState();
      const recentlyPlayed = ref<ResultItem | null>(null);

      if (route.params.genreName === 'recently-played') {
        onMounted(async () => {
          if (token) {
            const result = await fetch(
              'https://api.spotify.com/v1/me/player/recently-played',
              {
                headers: new Headers({ Authorization: token.value }),
              }
            );

            recentlyPlayed.value = await result.json();
          }
        });
      }

      return { recentlyPlayed };
    },
  };
</script>
