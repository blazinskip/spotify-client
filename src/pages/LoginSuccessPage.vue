<template>
  <h1 class="text-gray-50">SuccessfulLoginPage</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useState from '../use/use-state';

export default defineComponent({
  name: 'LoginSuccessPage',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { state, authenticate } = useState();
    watch(state, (newValue, oldValue) => console.log({ newValue, oldValue }));

    onMounted(() => {
      const values = route.hash.replace('#', '').split('&');
      const params: { [key: string]: string } = values.reduce(
        (acc, current) => {
          const [key, value] = current.split('=');
          return { ...acc, [key]: value };
        },
        {},
      );
      if (!params) {
        throw new Error('invalid login');
      }
      authenticate({
        token: params.access_token,
        type: params.token_type,
        expiresIn: +params.expires_in,
      });
      router.push({ path: '/' });
    });

    return {};
  },
});
</script>
