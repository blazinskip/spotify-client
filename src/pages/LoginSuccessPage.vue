<template>
  <h1 class="text-gray-50">SuccessfulLoginPage</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useState from '../use/use-state';

export default defineComponent({
  name: 'LoginSuccessPage',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { state, authenticate } = useState();
    onMounted(() => {
      authenticate('token');
      console.log(route.query);
    });

    return {};
  },
});
</script>
