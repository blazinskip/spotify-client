<template>
  <div v-if="playlist" class="pt-1 -mt-16">
    <playlist-header :playlist="playlist"></playlist-header>
    <playlist-tracks>
      <template #tracks>
        <playlist-track
          v-for="item in playlist.tracks.items"
          :key="item.track.id"
          :track="item.track"
        ></playlist-track>
      </template>
    </playlist-tracks>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import PlaylistHeader from '../components/PlaylistHeader.vue';
  import PlaylistTrack from '../components/PlaylistTrack.vue';
  import PlaylistTracks from '../components/PlaylistTracks.vue';
  import { HTTPStatusCode, Playlist } from '../types';
  import { apiRequest } from '../utils';

  export default defineComponent({
    name: 'Playlist',
    components: { PlaylistHeader, PlaylistTracks, PlaylistTrack },
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
