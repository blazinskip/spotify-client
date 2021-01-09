import { ref } from 'vue';
import { State } from '../types';

export default () => {
  const state = ref<State>({
    token: '',
    authenticated: false,
  });

  return {
    state,
  };
};
