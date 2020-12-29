<template>
  <div class="grid grid-flow-row gap-8 px-8 py-4">
    <section v-for="suggestion in suggestions" :key="suggestion.id">
      <header class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-gray-50">
          <router-link to="/genre">
            {{ suggestion.name }}
          </router-link>
        </h2>

        <router-link
          class="text-sm font-semibold text-gray-400 uppercase transition hover:text-gray-50"
          :to="'/genre/' + suggestion.id"
          >See all</router-link
        >
      </header>
      <div
        class="grid gap-6 overflow-y-hidden"
        style="
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          grid-auto-rows: 0;
          grid-template-rows: 1fr;
        "
      >
        <section v-for="playlist in suggestion.playlists" :key="playlist.id">
          <router-link
            class="relative flex flex-col w-full p-4 bg-black rounded group bg-opacity-20"
            :to="'/playlist/' + playlist.id"
          >
            <div
              class="absolute inset-0 transition-colors duration-300 ease-in-out rounded hover:bg-white hover:bg-opacity-10"
            ></div>
            <div class="relative pointer-events-none">
              <img class="mb-4 rounded" :src="playlist.thumbnailUrl" alt="" />
              <button
                class="absolute w-10 h-10 text-gray-400 duration-300 opacity-0 ease-in-outtransition right-2 bottom-6 group-hover:text-green-500 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-col" style="min-height: 64px">
              <h3 class="text-base font-bold text-gray-50">
                {{ playlist.title }}
              </h3>
              <div
                class="flex-1 mt-1 overflow-hidden text-sm font-normal text-gray-400 break-words overflow-ellipsis"
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                "
              >
                <span>{{ playlist.descritpion }}</span>
              </div>
            </div>
          </router-link>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
interface Playlist {
  id: number;
  title: string;
  descritpion: string;
  thumbnailUrl: string;
}

interface Suggestion {
  id: number;
  name: string;
  playlists: Playlist[];
}

export default {
  name: 'HomePage',
  setup() {
    Array.from({ length: 10 }, (x, i) => ({
      id: new Date().getTime(),
      title: `Hits ${i + 1}`,
      descritption: `Descriptios ${i + 1}`,
      thumbnailUrl: '',
    }));

    const suggestions: Suggestion[] = [
      {
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
      },
      {
        id: new Date().getTime(),
        name: 'Recently Played',
        playlists: [
          {
            id: new Date().getTime(),
            title: '00s Rock Anthems',
            descritpion: 'Thesee songs rocked the 00s. Cover: Linkin Park',
            thumbnailUrl:
              'https://i.scdn.co/image/ab67706f000000032cdb0982697cc0ae43b1b5b6',
          },
          ...Array.from({ length: 10 }, (x, i) => ({
            id: new Date().getTime(),
            title: `00s Rock Anthem ${i + 1}`,
            descritpion: `Thesee songs rocked the 00s. Cover: Linkin Park ${
              i + 1
            }`,
            thumbnailUrl:
              'https://i.scdn.co/image/ab67706f000000032cdb0982697cc0ae43b1b5b6',
          })),
        ],
      },
    ];

    return {
      suggestions,
    };
  },
};
</script>
