<template>
  <div class="grid grid-flow-row gap-8 px-8 py-4">
    <section v-for="genre in genres" :key="genre.id">
      <header class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-gray-50">
          <router-link to="'/genre/' + genre.id">
            {{ genre.name }}
          </router-link>
        </h2>

        <router-link
          class="text-sm font-semibold text-gray-400 uppercase transition hover:text-gray-50"
          :to="'/genre/' + genre.id"
          >See all</router-link
        >
      </header>
      <div
        class="grid overflow-y-hidden gap-x-6"
        style="
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          grid-auto-rows: 0;
          grid-template-rows: 1fr;
        "
      >
        <playlist-card
          v-for="playlist in genre.playlists"
          :key="playlist.id"
          :playlist="playlist"
        ></playlist-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import PlaylistCard from '../components/PlaylistCard.vue';
import { genres } from '../data';
import useState from '../use/use-state';

export default {
  components: { PlaylistCard },
  name: 'HomePage',
  setup() {
    const {state, token } = useState();

    return {
      genres,
    };
  },
};
</script>
