<template>
  <div v-if="playlist" class="px-8 py-6">
    <div style="max-height: 500px; min-height: 340px; height: 30vh"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { HTTPStatusCode, Playlist } from '../types';
  import useState from '../use/use-state';
  import { apiRequest } from '../utils';

  export default defineComponent({
    name: 'Playlist',
    setup() {
      const route = useRoute();
      const { token } = useState();
      const playlist = ref<Playlist | null>(null);
      onMounted(async () => {
        if (token && route.params.playlistId) {
          const { result, status } = await apiRequest<Playlist>(
            `https://api.spotify.com/v1/playlists/${route.params.playlistId}`
          );

          if (status === HTTPStatusCode.OK) {
            playlist.value = result;
          }
        }
      });

      return { route, playlist };
    },
  });
</script>
