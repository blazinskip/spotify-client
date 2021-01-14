<template>
  <div v-if="loaded">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useState from "./use/use-state";

export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { authenticate } = useState();
    const loaded = ref(false);
    onMounted(() => {
      localStorage.setItem("theme", "dark"); // Used right now
      loaded.value = true;
    });

    return {
      loaded,
    };
  },
});
</script>
