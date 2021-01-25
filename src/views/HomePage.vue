<template>
  <div class="grid grid-flow-row gap-8 px-8 py-4">
    <section>
      <header class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-gray-50">
          <router-link to="/genre/recently-played">
            Recently Played
          </router-link>
        </h2>

        <router-link
          class="text-sm font-semibold text-gray-400 uppercase transition hover:text-gray-50"
          :to="'/genre/recently-played'"
        >
          See all
        </router-link>
      </header>
      <div
        v-if="recentlyPlayed"
        class="grid overflow-y-hidden gap-x-6"
        style="
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          grid-auto-rows: 0;
          grid-template-rows: 1fr;
        "
      >
        <track-album-card
          v-for="item in recentlyPlayed.items"
          :key="item.track.id"
          :track="item.track"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from 'vue';
  import useState from '../use/use-state';
  import { HTTPStatusCode, ResultItem } from '../types';
  import TrackAlbumCard from '../components/TrackAlbumCard.vue';
  import { apiRequest } from '../utils';

  export default {
    name: 'HomePage',
    components: { TrackAlbumCard },
    setup() {
      const recentlyPlayed = ref<ResultItem | null>(null);
      const { token } = useState();

      onMounted(async () => {
        if (token) {
          const { result, status } = await apiRequest<ResultItem>(
            'https://api.spotify.com/v1/me/player/recently-played'
          );

          if (status === HTTPStatusCode.OK) {
            recentlyPlayed.value = result;
          }
        }
      });

      return {
        recentlyPlayed,
      };
    },
  };
</script>
