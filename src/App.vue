<template>
  <div v-if="loaded">
    <the-authenticated v-if="state.authenticated" />
    <the-log-in v-if="!state.authenticated" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import useState from './use/use-state';
import TheLogIn from './components/TheLogIn.vue';
import TheAuthenticated from './components/TheAuthenticated.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheLogIn,
    TheAuthenticated,
  },
  setup() {
    const loaded = ref(false);
    const { state } = useState();

    onMounted(() => {
      loaded.value = true;
    });

    return {
      loaded,
      state,
    };
  },
});
</script>

<style scoped>
.background {
  background: url(https://images.unsplash.com/photo-1511719218143-933ef7b27efa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
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
