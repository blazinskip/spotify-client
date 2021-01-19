<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen bg-gray-200 dark:bg-gray-900 background"
  >
    <div
      class="z-10 w-full h-full p-8 bg-gray-900 shadow-md md:h-1/2 md:w-1/2 text-gray-50 md:rounded-2xl"
    >
      <section class="flex flex-col items-center justify-center h-full">
        <header class="text-2xl font-bold">
          <h2>Listen your music</h2>
        </header>
        <section class="pt-8">
          <a :href="href">
            <button
              class="w-full px-8 py-4 font-bold uppercase transition bg-green-600 rounded-full hover:bg-green-500"
            >
              Log In
            </button>
          </a>
        </section>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  const clientId = 'f67aadc0bde24f30b2276b9d08f3665b';
  const redirectUri = `${location.origin}/#/login-success/`;
  const scopes = [
    'playlist-read-private',
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-modify-playback-state',
  ];

  const href = `${'https://accounts.spotify.com/authorize?response_type=token&client_id='}${clientId}${
    scopes ? `&scope=${encodeURIComponent(scopes.join(' '))}` : ''
  }&redirect_uri=${encodeURIComponent(redirectUri)}`;

  export default defineComponent({
    name: 'LoginPage',
    setup() {
      return { href };
    },
  });
</script>
<style scoped>
  .background {
    background: url(https://images.unsplash.com/photo-1511719218143-933ef7b27efa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100)
      no-repeat center center fixed;
    background-size: cover;
  }
  .background:before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px); /* apply the blur */
    pointer-events: none; /* make the pseudo class click-through */
    filter: brightness(50%);
  }
</style>
