<template>
  <div v-if="playlist" class="px-8 py-6"></div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { HTTPStatusCode, Playlist } from '../types';
  import { apiRequest } from '../utils';

  export default defineComponent({
    name: 'Playlist',
    setup() {
      const route = useRoute();
      const playlist = ref<Playlist | null>(null);
      const fetchPlaylist = async () => {
        if (route.params.playlistId) {
          const { result, status } = await apiRequest<Playlist>(
            `https://api.spotify.com/v1/playlists/${route.params.playlistId}`
          );

          if (status === HTTPStatusCode.OK) {
            playlist.value = result;
          }
        }
      };

      onMounted(fetchPlaylist);
      watch(() => route.params, fetchPlaylist);

      return { route, playlist };
    },
  });
</script>
